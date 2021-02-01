FROM nginx:1.16.0-alpine
COPY /build /usr/share/nginx/html
COPY /.nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]