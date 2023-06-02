import { FastifyInstance } from 'fastify';
import defaultRoutes from '../modules/default/default.routes';
import CategoryRoutes from '../modules/category/category.routes';

export default function routes(server: FastifyInstance) {
  server.register(defaultRoutes, { prefix: '/api/' });
  server.register(CategoryRoutes, { prefix: '/api/categories' });
}
