FROM node:14
WORKDIR src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 4000
CMD ["node", "src/server.js"]
