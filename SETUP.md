# MySQL and Prisma setup

Prisma 7 is installed and configured to use MySQL through the MariaDB driver adapter (which supports MySQL-compatible servers).

1. Create a MySQL database locally or with a hosted MySQL provider.
2. Copy the database's complete connection string into `.env` as `DATABASE_URL`. The standard format is `mysql://USER:PASSWORD@HOST:3306/DATABASE_NAME`. URL-encode special characters in the username or password.
3. After models have been added to `prisma/schema.prisma`, run `npm run db:push` for direct schema synchronization or `npm run db:migrate` to create and apply a development migration.

The database URL used by Prisma CLI commands is configured in the root `prisma.config.ts`. Runtime connections are created in `lib/prisma.ts` with `@prisma/adapter-mariadb` and SSL enabled.

No other project configuration is required.

## Database commands

- `npm run db:generate` regenerates Prisma Client after schema changes.
- `npm run db:push` synchronizes the Prisma schema directly to the database without creating migration files.
- `npm run db:migrate` creates and applies a development migration.
- `npm run db:studio` opens Prisma Studio.
- `npm run db:seed` runs `prisma/seed.ts`.
