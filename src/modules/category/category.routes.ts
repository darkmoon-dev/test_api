import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import {
  categoryListSchema,
  categoryFindSchema,
  categoryCreationSchema,
  categoryUpdateSchema,
  categoryRemoveSchema,
} from './category.schemas';
import { create, find, list, remove, update } from './category.controller';

export default async function CategoryRoutes(
  server: FastifyInstance,
  options: FastifyPluginOptions,
  done: () => void
) {
  server.get('/', { schema: categoryListSchema }, list);

  server.post('/', { schema: categoryCreationSchema }, create);

  server.get('/:id', { schema: categoryFindSchema }, find);

  server.put('/:id', { schema: categoryUpdateSchema }, update);

  server.delete('/:id', { schema: categoryRemoveSchema }, remove);

  done();
}
