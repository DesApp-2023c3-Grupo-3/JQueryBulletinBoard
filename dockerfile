FROM node:18-alpine

WORKDIR /app

COPY package.json . 
RUN npm install && npm install serve

COPY . .

RUN npm run build

# Inicia la aplicación
CMD ["npm", "run", "start"]
