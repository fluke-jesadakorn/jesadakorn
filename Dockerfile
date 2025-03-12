# Build stage
FROM oven/bun:1.2.3 AS builder
WORKDIR /app

# Copy package files
COPY package.json bun.lock ./
COPY . .

# Install dependencies and build
ENV NODE_ENV=production
RUN bun install --frozen-lockfile
ENV NEXT_TELEMETRY_DISABLED=1
RUN bun run build

# Production stage
FROM oven/bun:1.2.3-alpine AS runner
WORKDIR /app

# Copy necessary files from builder
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Set environment variables
ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"
ENV NEXT_TELEMETRY_DISABLED=1

EXPOSE 3000

# Run the app
CMD ["bun", "server.js"]
