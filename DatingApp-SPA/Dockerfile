# Phase 1: Build Artifacts
FROM node:alpine AS build
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build -- --prod

# Phase 2: Release Artifacts
FROM nginx
RUN rm /etc/nginx/conf.d/default.conf
COPY client.conf /etc/nginx/conf.d
WORKDIR /usr/share/nginx/html
COPY --from=build /app/dist/DatingApp-SPA .