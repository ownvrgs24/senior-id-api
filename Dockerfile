FROM node:22-alpine AS builder
WORKDIR /usr/src/app

# 1) Copy package manifests and install deps
COPY package*.json ./
RUN npm ci

# 2) Copy your Prisma schema (and only that) & generate client
COPY prisma ./prisma
RUN npx prisma generate

# 3) Copy the rest of your source
COPY . .

# 4) Build / prune / etc if needed
# RUN npm run build
# RUN npm prune --production

# ─── Runtime stage ───
FROM node:22-alpine
WORKDIR /usr/src/app

# 5) Bring in generated client & dependencies
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app ./

EXPOSE 3000
CMD ["npm", "start"]
