# Step 1: Use Node.js 22 as the base image
FROM node:22 AS build

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json
COPY package*.json ./

# Step 4: Install dependencies (including Prisma)
RUN npm install

# Step 5: Copy the entire project into the container
COPY . .

# Step 6: Run prisma generate to create Prisma client
RUN npx prisma generate --schema=./prisma/schema.prisma

# Step 7: Install TypeScript globally and build the app
RUN npm install -g typescript
RUN npx tsc

# Step 8: Create a production image
FROM node:22 AS production

# Set working directory for production
WORKDIR /app

# Copy the dist files, prisma files, and node_modules from the build stage
COPY --from=build /app/dist /app/dist
COPY --from=build /app/node_modules /app/node_modules
COPY --from=build /app/prisma /app/prisma

# Copy package.json and package-lock.json for production
COPY package*.json ./

# Install only production dependencies
RUN npm install --production

# Run prisma generate during the Docker build to ensure the client is created
RUN npx prisma generate --schema=./prisma/schema.prisma

# Expose the port the app will run on
EXPOSE 3000

# Start the app
CMD ["node", "dist/index.js"]
