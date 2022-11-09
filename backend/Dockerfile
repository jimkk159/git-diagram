# Base image
FROM node:16
# Create and Switch workdir
WORKDIR /app
# App source
COPY . /app
# Set npm socket timeout
RUN ["npm","config","set","fetch-retry-mintimeout","20000"]
RUN ["npm","config","set","fetch-retry-maxtimeout","120000"]
# Install dependencies
RUN ["npm","install"]
# Expose port
# Debug use docker run -p 5000:5000
EXPOSE 5000
# Entrypoint
ENTRYPOINT ["node", "app.js"]