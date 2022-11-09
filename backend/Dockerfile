# Base image
FROM node:16
# Create and Switch workdir
WORKDIR /app
# App source
COPY . /app
# Install dependencies
RUN ["npm","install"]
# Expose port
# Debug use docker run -p 3000:3000
EXPOSE 3000
# Entrypoint
ENTRYPOINT ["node", "app.js"]