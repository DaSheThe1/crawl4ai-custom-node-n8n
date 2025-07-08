cp Crawl4AI.node.ts src/nodes/Crawl4aiCustom/Crawl4aiCustom.node.ts
cp Crawl4AIApi.credentials.ts src/credentials/Crawl4AIApi.credentials.ts

rm -rf dist
npm run build

# Remove old installation
docker exec n8n-docker-n8n-1 rm -rf /home/node/.n8n/nodes/node_modules/n8n-nodes-crawl4ai-custom || true
docker cp . n8n-docker-n8n-1:/home/node/.n8n/nodes/node_modules/n8n-nodes-crawl4ai-custom

# docker exec n8n-docker-n8n-1 bash -c "cd /home/node/.n8n/nodes/node_modules/n8n-nodes-crawl4ai-custom && npm install --production"

docker restart n8n-docker-n8n-1
