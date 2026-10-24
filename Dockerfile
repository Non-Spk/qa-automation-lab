
FROM mcr.microsoft.com/playwright:v1.64.1-jammy

ENV CI=true
WORKDIR /app

RUN npm install --global corepack@0.34.5 \
  && corepack enable

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

RUN pnpm install --frozen-lockfile

COPY . .

CMD ["pnpm", "test"]
