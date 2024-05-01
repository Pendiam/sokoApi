# Use the official Node.js runtime as the base image
FROM node:latest

# Create and set the working directory inside the container
WORKDIR /app

# Copy initial files to working directory
COPY package.json ./

# install application dependencies
RUN yarn

# Copy application code
COPY . .


EXPOSE 5000

CMD [ "yarn", "start" ]