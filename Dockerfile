FROM mcr.microsoft.com/playwright:v1.48.1-jammy

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN corepack enable && pnpm install --frozen-lockfile

COPY . .

RUN pnpm exec playwright install --with-deps chromium

CMD ["pnpm", "test"]