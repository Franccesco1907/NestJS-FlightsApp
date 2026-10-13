# NestJS Flights API

Learning API for users, passengers and flights, backed by MongoDB with JWT authentication.

1. Run `npm ci`.
2. Configure `.env.development`: `URI_MONGODB`, `JWT_SECRET`, `EXPIRES_IN`, `APP_URL` and optional `PORT` (default 3000). Use your own local database and secret values.
3. Start MongoDB, then `npm run start:dev`. Swagger: `http://localhost:3000/api/docs`; Postman collection: `docs/api-superflights.postman_collection.json`.
4. Production: `npm run build`, then `npm run start:prod`.

Checks: `npm test -- --runInBand`, `npm run test:e2e -- --runInBand`, `npm run test:cov`. Integration tests need the configured database; scaffold service/controller tests do not all supply their dependencies.
