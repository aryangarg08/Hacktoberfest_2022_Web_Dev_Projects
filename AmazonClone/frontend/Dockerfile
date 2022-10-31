# pull the base image
FROM node:alpine

# set the working direction
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]

RUN npm install

# add app
COPY . .

# start app
CMD ["npm", "start"]