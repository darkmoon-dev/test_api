import { FastifyReply, FastifyRequest } from 'fastify';

declare module 'fastify' {
  export interface FastifySchema {
    tags?: string[];
    description?: string;
  }
}
