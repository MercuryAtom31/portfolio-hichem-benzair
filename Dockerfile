# Use Node.js for building the frontend
FROM node:18 AS build

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy all frontend files and build the app
COPY . .
RUN npm run build

# Use Nginx for serving static files
FROM nginx:latest
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 for web access
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
