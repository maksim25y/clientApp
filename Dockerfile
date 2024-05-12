FROM node:alpine
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package*.json ./
RUN npm install
RUN npm install -g @angular/cli@7.3.9
COPY . ./
CMD ng serve --host 0.0.0.0
