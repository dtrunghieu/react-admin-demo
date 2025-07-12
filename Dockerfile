
# Use official Node.js image
FROM node:20-alpine

WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Copy source code
COPY . .

# Build the React app
RUN npm run build

# Install serve to run the static build
RUN npm install -g serve

# Expose port 8080
EXPOSE 8080

# Start the app with serve
CMD ["serve", "-s", "build", "-l", "8080"]