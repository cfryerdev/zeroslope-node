FROM node:carbon
# Create app directory
WORKDIR /usr/src/app
# Install app dependencies
COPY package*.json ./
RUN npm i
# Copy app source code
COPY . .
#Expose port and start application
EXPOSE 3001
CMD [ "npm", "start" ]