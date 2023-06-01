import { FastifyInstance } from 'fastify';

export default function registers(server: FastifyInstance) {
  server.register(require('@fastify/swagger'), {
    exposeRoute: true,
    staticCSP: true,
    swagger: {
      swagger: '2.0',
      info: {
        title: 'Super Api',
        description: 'A REST API with TypeScript and Fastify',
        version: '1.0.0',
      },
      schemes: ['http', 'https'],
      consumes: ['application/json'],
      produces: ['application/json'],
    },
  });

  server.register(require('@fastify/swagger-ui'), {
    routePrefix: '/',
  });
}
