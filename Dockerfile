# Configure Proxy Server
FROM nginx
RUN rm /etc/nginx/conf.d/default.conf
COPY ./proxy.conf /etc/nginx/conf.d
WORKDIR /usr/share/nginx/html