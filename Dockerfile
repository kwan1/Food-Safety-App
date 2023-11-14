# Use an official Node runtime as a parent image (Alpine variant)
FROM node:14-alpine

# Create a non-root user and set user environment variables
RUN adduser -D -g '' myuser

# Set the working directory in the container
WORKDIR /fsa

# Copy only package.json and package-lock.json to the container
COPY --chown=myuser:myuser package*.json ./

# Install app dependencies and clean up
RUN npm install -g \
    && npm ci --production \
    && npm cache clean --force

# Copy the rest of your application's source code
COPY --chown=myuser:myuser . .

# Expose the port your app will run on
EXPOSE 3000

# Define the command to start your app
CMD ["npm", "start"]

