# Stage 1: Install dependencies
FROM node:20-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json package-lock.json* ./
RUN npm ci

# Stage 2: Rebuild the source code
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Ensure we are doing a production build
ENV NODE_ENV production
# Disable telemetry for faster builds
ENV NEXT_TELEMETRY_DISABLED 1

RUN npm run build

# Stage 3: Production image, serving with Nginx
FROM nginx:alpine AS runner
WORKDIR /usr/share/nginx/html

# Clean the default nginx directory
RUN rm -rf ./*

# Copy the static export from the builder stage
# With output: 'export', Next.js creates the 'out' directory
COPY --from=builder /app/out .

# Add nginx configuration
RUN echo 'server { \
    listen 80; \
    location / { \
    root /usr/share/nginx/html; \
    index index.html index.htm; \
    try_files $uri $uri.html $uri/ /index.html; \
    } \
    error_page 404 /404.html; \
    location = /404.html { \
    root /usr/share/nginx/html; \
    internal; \
    } \
    }' > /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
