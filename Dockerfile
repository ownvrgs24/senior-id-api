# Step 1: Use Node.js 22 as the base image
FROM node:22 AS build

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json (or npm-shrinkwrap.json)
COPY package*.json ./

# Step 4: Install dependencies (including Prisma)
RUN npm install

# Step 5: Run prisma generate to create Prisma client
RUN npm run postinstall

# Step 6: Install TypeScript globally and build the app
RUN npm install -g typescript
RUN npx tsc

# Step 7: Create a production image
FROM node:22 AS production

# Step 8: Set the working directory inside the container for production
WORKDIR /app

# Step 9: Copy only the compiled files and Prisma client
COPY --from=build /app/dist /app/dist
COPY --from=build /app/node_modules /app/node_modules
COPY --from=build /app/prisma /app/prisma

# Step 10: Copy package.json and package-lock.json for production dependencies
COPY package*.json ./

# Step 11: Install only the production dependencies
RUN npm install --production

# Step 12: Expose port 3000 for the app
EXPOSE 3000

# Step 13: Run the application
CMD ["node", "dist/index.js"]
