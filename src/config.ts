import { Type, Static } from '@sinclair/typebox';
import { envSchema } from 'env-schema';

const schema = Type.Object({
  SERVER_HOST: Type.String({
    default: 'localhost',
  }),

  SERVER_PORT: Type.Number({
    default: 5000,
  }),

  DATABASE_URL: Type.String(),
});

export const config = envSchema<Static<typeof schema>>({
  schema,
  dotenv: true,
});
