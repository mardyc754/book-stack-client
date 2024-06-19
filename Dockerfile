# # Build stage
# FROM node:20-alpine AS build

# WORKDIR /app

# ENV NODE_ENV=production

# # Copy package.json and package-lock.json to the container
# COPY package.json ./

# COPY pnpm-lock.yaml ./


# # Copy the rest of the application code
# COPY . .

# SHELL ["/bin/bash", "-c"]

# # RUN npm install --global pnpm \
# #     && SHELL=bash pnpm setup \
# #     && source /root/.bashrc && pnpm install -g typescript

# RUN corepack enable && corepack prepare pnpm@latest --activate

# # Enable `pnpm add --global` on Alpine Linux by setting
# # home location environment variable to a location already in $PATH
# # https://github.com/pnpm/pnpm/issues/784#issuecomment-1518582235
# ENV PNPM_HOME=/usr/local/bin

# # Add a global package
# RUN pnpm add --global @upleveled/preflight@latest

# RUN pnpm config set store-dir /pnpm-store

# # Build the React app
# RUN pnpm build

# COPY --from=build /app/dist ./dist

# CMD ["node", "dist/index.js"]

# Use an official Node.js, and it should be version 16 and above
FROM node:20-alpine
# Set the working directory in the container
WORKDIR /app
# Copy package.json and pnpm-lock.yaml
COPY pnpm-lock.yaml package.json ./
# Install app dependencies using PNPM
RUN npm install -g pnpm
# Install dependencies
RUN pnpm i 
# Copy the application code 
COPY . .
# Build the TypeScript code
RUN pnpm run build
# Expose the app
EXPOSE 3000
# Start the application
CMD ["pnpm", "preview"]