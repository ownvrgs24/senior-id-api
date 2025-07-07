# 1) Use the official Node 22 Alpine image (tiny, production-ready)
FROM node:22-alpine

# 2) Create app directory
WORKDIR /usr/src/app

# 3) Copy package files & install deps
COPY package*.json ./
RUN npm ci --only=production

# 4) Bundle app source
COPY . .

# 5) Expose the port your app runs on
EXPOSE 3000

# 6) Default command
CMD ["npm", "start"]
