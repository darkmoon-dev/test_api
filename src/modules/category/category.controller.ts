import CategoryService from './category.service';
import { FastifyRequest, FastifyReply } from 'fastify';
import {
  CreateCategoryBody,
  FindCategoryParams,
  UpdateCategoryBody,
} from './category.schemas';

export async function list(request: FastifyRequest, reply: FastifyReply) {
  return reply.code(200).send(await CategoryService.findAll());
}

export async function find(
  request: FastifyRequest<{ Params: FindCategoryParams }>,
  reply: FastifyReply
) {
  const category = await CategoryService.findById(request.params);

  if (!category)
    return reply.code(400).send({
      message: 'Category not found',
      error: 'CATEGORY_NOT_FOUND',
      code: 400,
    });

  return reply.code(200).send(category);
}

export async function create(
  request: FastifyRequest<{ Body: CreateCategoryBody }>,
  reply: FastifyReply
) {
  try {
    const category = await CategoryService.create(request.body);
    return reply.code(201).send(category);
  } catch (error: any) {
    return reply.code(400).send({
      message: error.message,
      error: 'CATEGORY_CREATION_FAILED',
      code: 400,
    });
  }
}

export async function update(
  request: FastifyRequest<{
    Params: FindCategoryParams;
    Body: UpdateCategoryBody;
  }>,
  reply: FastifyReply
) {
  let category = await CategoryService.findById(request.params);

  if (!category)
    return reply.code(400).send({
      message: 'Category not found',
      error: 'CATEGORY_NOT_FOUND',
      code: 400,
    });

  category = await CategoryService.update(request.params, request.body);
  return reply.code(200).send(category);
}

export async function remove(
  request: FastifyRequest<{ Params: FindCategoryParams }>,
  reply: FastifyReply
) {
  const category = await CategoryService.findById(request.params);

  if (!category)
    return reply.code(400).send({
      message: 'Category not found',
      error: 'CATEGORY_NOT_FOUND',
      code: 400,
    });
}
