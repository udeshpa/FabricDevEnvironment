#PEER_MODE=dev
#Command=dev-init.sh -d 
#Generated: Thu Jul 11 05:12:15 UTC 2019 
docker-compose  -f ./compose/docker-compose.base.yaml    -f ./compose/docker-compose.dev.yaml      up -d --remove-orphans
