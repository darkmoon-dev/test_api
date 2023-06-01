import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import { checkHeathSchema } from './default.schemas';
import { checkHeath } from './default.controller';

export default async function ModuleRoutes(
  server: FastifyInstance,
  options: FastifyPluginOptions,
  done: () => void
) {
  server.get('/chekHeath', { schema: checkHeathSchema }, checkHeath);

  done();
}
