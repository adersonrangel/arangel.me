#!/bin/bash
set -e

# Configuración
domains=(arangel.me www.arangel.me)
email="soporte@arangel.me"
rsa_key_size=4096
data_path="./certbot"
staging=0 # Cambiar a 1 para pruebas (evita rate limits)

# Colores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo -e "${GREEN}=== Configuración Let's Encrypt ===${NC}"
echo -e "Dominios: ${domains[*]}"
echo -e "Email: ${email}"
echo -e ""

# Verificar si existen certificados válidos
if [ -d "$data_path/conf/live/${domains[0]}" ]; then
    echo -e "${YELLOW}¡Advertencia! Ya existen certificados en $data_path/conf/live/${domains[0]}${NC}"
    read -p "¿Deseas sobrescribirlos? (y/N) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo -e "${RED}Operación cancelada${NC}"
        exit 1
    fi
fi

# Crear directorios necesarios
echo -e "${GREEN}Creando directorios...${NC}"
mkdir -p "$data_path/conf"
mkdir -p "$data_path/www"

# Descargar parámetros SSL recomendados
echo -e "${GREEN}Descargando parámetros SSL...${NC}"
curl -s https://raw.githubusercontent.com/certbot/certbot/master/certbot-nginx/certbot_nginx/_internal/tls_configs/options-ssl-nginx.conf > "$data_path/conf/options-ssl-nginx.conf"
curl -s https://raw.githubusercontent.com/certbot/certbot/master/certbot/certbot/ssl-dhparams.pem > "$data_path/conf/ssl-dhparams.pem"

# Crear certificado temporal para que nginx pueda iniciar
echo -e "${GREEN}Creando certificado temporal...${NC}"
path="/etc/letsencrypt/live/${domains[0]}"
mkdir -p "$data_path/conf/live/${domains[0]}"
docker compose run --rm --entrypoint "\
    openssl req -x509 -nodes -newkey rsa:$rsa_key_size -days 1\
        -keyout '$path/privkey.pem' \
        -out '$path/fullchain.pem' \
        -subj '/CN=localhost'" certbot

# Iniciar nginx con certificado temporal
echo -e "${GREEN}Iniciando nginx con certificado temporal...${NC}"
docker compose up --force-recreate -d nginx

# Eliminar certificado temporal
echo -e "${GREEN}Eliminando certificado temporal...${NC}"
docker compose run --rm --entrypoint "\
    rm -Rf /etc/letsencrypt/live/${domains[0]} && \
    rm -Rf /etc/letsencrypt/archive/${domains[0]} && \
    rm -Rf /etc/letsencrypt/renewal/${domains[0]}.conf" certbot

# Construir argumentos de dominios
domain_args=""
for domain in "${domains[@]}"; do
    domain_args="$domain_args -d $domain"
done

# Configurar bandera de staging
if [ $staging != "0" ]; then
    staging_arg="--staging"
fi

# Solicitar certificado real
echo -e "${GREEN}Solicitando certificado SSL...${NC}"
docker compose run --rm --entrypoint "\
    certbot certonly --webroot -w /var/www/certbot \
        --email $email \
        $domain_args \
        --rsa-key-size $rsa_key_size \
        --agree-tos \
        --force-renewal \
        $staging_arg" certbot

# Recargar nginx
echo -e "${GREEN}Recargando nginx...${NC}"
docker compose exec nginx nginx -s reload

echo -e ""
echo -e "${GREEN}=== ¡Configuración completada! ===${NC}"
echo -e ""
echo -e "Certificados instalados en: $data_path/conf/live/${domains[0]}"
echo -e ""
echo -e "Próximos pasos:"
echo -e "  1. Verificar: curl -I https://${domains[0]}"
echo -e "  2. Verificar: curl -I https://www.${domains[0]}"
echo -e "  3. Verificar redirección: curl -I http://${domains[0]}"
