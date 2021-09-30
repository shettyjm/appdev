# Stage 1: Compile and Build angular codebase

# Use official node image as the base image
FROM node:12-alpine as build

# Set the working directory
WORKDIR /app
COPY package.json package-lock.json ./

# Add the source code to app
RUN npm install
COPY . .

RUN ls -ltra

# Install all the dependencies


# Generate the build of the application
RUN npm install -g @angular/cli
RUN ng build --configuration production --output-path=/dist


# Stage 2: Serve app with nginx server

# Use official nginx image as the base image
FROM nginx:stable

# Copy the build output to replace the default nginx contents.

# RUN chgrp -R root /var/cache/nginx /var/run /var/log/nginx && \
#     chmod -R 770 /var/cache/nginx /var/run /var/log/nginx
 
RUN ls -ltra
COPY --from=build /dist /usr/share/nginx/html
COPY ./start-nginx.sh /usr/bin/start-nginx.sh

RUN ls -ltra
RUN chmod +x /usr/bin/start-nginx.sh

WORKDIR /usr/share/nginx/html

#openshift
RUN chmod g+rwx /var/cache/nginx /var/run /var/log/nginx /usr/share/nginx/html/assets/env.js /usr/share/nginx/html/assets/env.template.js
RUN sed -i.bak 's/listen\(.*\)80;/listen 8081;/' /etc/nginx/conf.d/default.conf
RUN sed -i.bak 's/^user/#user/' /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 8081
ENTRYPOINT [ "start-nginx.sh" ]
# USER 1000
# CMD ["/bin/sh",  "-c",  "envsubst < /usr/share/nginx/html/assets/env.template.js > /usr/share/nginx/html/assets/env.js && exec nginx -g 'daemon off;'"]
