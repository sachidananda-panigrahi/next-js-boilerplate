# syntax=docker/dockerfile:1.7-labs

# ── Stage 1: Build ──────────────────────────────────────────────
ARG NODE_VERSION=22
FROM node:${NODE_VERSION}-alpine AS builder
WORKDIR /app

RUN corepack enable pnpm

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .
RUN pnpm build

# ── Stage 2: Production (Watt runtime) ──────────────────────────
FROM node:${NODE_VERSION}-alpine
WORKDIR /app

# Copy Next.js standalone bundle (self-contained server + bundled node_modules)
COPY --from=builder /app/.next/standalone .
COPY --from=builder /app/watt.json ./watt.json
COPY --from=builder /app/.next/static .next/static
COPY --from=builder /app/public ./public

# Install Watt CLI and @platformatic/next capability globally.
# These are separate from the standalone bundle's own node_modules —
# wattpm orchestrates the standalone server as a worker thread.
ARG PLT_VERSION=3.54.0
RUN npm install -g wattpm@${PLT_VERSION} @platformatic/next@${PLT_VERSION}

# Bind to all interfaces so Docker can route external traffic in.
ENV PLT_SERVER_HOSTNAME=0.0.0.0
ENV PORT=3000
EXPOSE ${PORT}

CMD ["wattpm", "start"]
