# Usa uma imagem do Node.js otimizada
FROM node:18-alpine

# Define o diretório de trabalho no contêiner
WORKDIR /app

# Copia apenas os arquivos essenciais para instalar dependências
COPY package.json package-lock.json ./

# Instala as dependências
RUN npm install

# Copia o restante do código
COPY . .

# Gera a build otimizada do Next.js
RUN npm run build

# Expõe a porta do Next.js (3000 por padrão)
EXPOSE 3000

# Comando para rodar o app
CMD ["npm", "start"]
