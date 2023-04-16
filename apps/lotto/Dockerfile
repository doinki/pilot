FROM node:18-alpine AS base

FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY apps/lotto/package.json ./apps/lotto/package.json
COPY packages/eslint-config-pilot/package.json ./packages/eslint-config-pilot/package.json
COPY packages/hooks/package.json ./packages/hooks/package.json
COPY packages/icons/package.json ./packages/icons/package.json
COPY packages/tailwindcss/package.json ./packages/tailwindcss/package.json
COPY packages/tsconfig/package.json ./packages/tsconfig/package.json
COPY packages/types/package.json ./packages/types/package.json
COPY packages/ui/package.json ./packages/ui/package.json
COPY packages/utils/package.json ./packages/utils/package.json

RUN corepack enable pnpm
RUN pnpm i --frozen-lockfile


FROM base AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/apps/lotto/node_modules ./apps/lotto/node_modules
COPY --from=deps /app/packages/eslint-config-pilot/node_modules ./packages/eslint-config-pilot/node_modules
COPY --from=deps /app/packages/hooks/node_modules ./packages/hooks/node_modules
COPY --from=deps /app/packages/icons/node_modules ./packages/icons/node_modules
COPY --from=deps /app/packages/tailwindcss/node_modules ./packages/tailwindcss/node_modules
COPY --from=deps /app/packages/types/node_modules ./packages/types/node_modules
COPY --from=deps /app/packages/ui/node_modules ./packages/ui/node_modules
COPY --from=deps /app/packages/utils/node_modules ./packages/utils/node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED 1

RUN corepack enable pnpm
RUN pnpm build --filter=lotto


FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder --chown=nextjs:nodejs /app/apps/lotto/.next/standalone ./
COPY --from=builder /app/apps/lotto/public ./apps/lotto/public
COPY --from=builder --chown=nextjs:nodejs /app/apps/lotto/.next/static ./apps/lotto/.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "apps/lotto/server.js"]
