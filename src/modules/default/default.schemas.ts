import { Static, Type } from '@sinclair/typebox';

const tags = ['default'];

const ckeckSchema = Type.Object({
  status: Type.String(),
});

export const errorSchema = Type.Object({
  message: Type.String(),
  error: Type.String(),
  code: Type.Number(),
});

export const checkHeathSchema = {
  tags,
  description: 'check if the server is alive.',
  response: {
    200: ckeckSchema,
  },
};

export type ApiError = Static<typeof errorSchema>;
