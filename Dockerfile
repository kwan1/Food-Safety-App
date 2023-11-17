# Use an official Node runtime as a parent image (Alpine variant)
FROM node:18-alpine

# Create a non-root user
RUN adduser -D -g '' myuser

# Set the working directory in the container
WORKDIR /fsa

# Copy necessary files
COPY public/ src/ package.json ./

# Install app dependencies, set NODE_ENV to production, and clean up
RUN npm install --production \
    && npm cache clean --force \
    && rm -rf /tmp/* /var/tmp/* /usr/share/doc/* /usr/share/man/* /var/cache/apk/* \
    && chown -R myuser:myuser /fsa

# Switch to non-root user
USER myuser

# Expose the port your app will run on
EXPOSE 3000

# Define the command to start your app
CMD ["npm", "start"]

