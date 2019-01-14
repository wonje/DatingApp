# Phase 1: Build Artifacts
FROM node:11.6.0-alpine AS Build
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build -- --prod

# Phase 2: Release Artifacts
FROM nginx
COPY --from=Build /app/dist/DatingApp-SPA /usr/share/nginx/html