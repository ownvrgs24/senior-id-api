# ── STAGE 1: build & generate ───────────────────────────────────────
FROM node:22-alpine AS builder
WORKDIR /usr/src/app

# 1) Install all deps (including devDeps so we have prisma CLI)
COPY package*.json ./
RUN npm ci                                   

# 2) Copy your code & schema, then generate the Prisma Client
COPY . .
RUN npx prisma generate      # ← generate Prisma Client 

# 3) Remove devDependencies (prisma CLI remains global)
RUN npm prune --production   # ← slim down to prod deps 


# ── STAGE 2: runtime image ──────────────────────────────────────────
FROM node:22-alpine
WORKDIR /usr/src/app

# 4) Install Prisma CLI globally so you can run Prisma commands at runtime
RUN npm install -g prisma    # ← global Prisma CLI :contentReference[oaicite:2]{index=2}

# 5) Copy in your production dependencies and built client
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app ./

EXPOSE 3000
CMD ["npm", "start"]
