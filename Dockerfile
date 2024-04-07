FROM docker.io/library/node:21-alpine


COPY server/package*.json /app/
WORKDIR /app/
RUN npm ci
COPY server/ /app

EXPOSE 3000
CMD ["node", "src/main.js"]