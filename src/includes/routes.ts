import { FastifyInstance } from 'fastify';
import defaultRoutes from '../modules/default/default.routes';

export default function routes(server: FastifyInstance) {
  server.register(defaultRoutes, { prefix: '/api/' });
}
