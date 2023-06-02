import { Static, Type } from '@sinclair/typebox';
import { errorSchema } from '../default/default.schemas';

const tags = ['category'];

const category = Type.Object({
  id: Type.Number(),
  label: Type.String(),
  description: Type.Optional(Type.String()),
});

const findCategoryParams = Type.Object({
  id: Type.Number(),
});

const createCategoryRequestBody = Type.Object({
  label: Type.String(),
  description: Type.Optional(Type.String()),
});

const updateCategoryRequestBody = Type.Object({
  label: Type.Optional(Type.String()),
  description: Type.Optional(Type.String()),
});

export const categoryListSchema = {
  tags,
  description: 'A list of category.',
  response: {
    200: Type.Array(category),
  },
};

export const categoryFindSchema = {
  tags,
  description: 'Find a category by id.',
  params: findCategoryParams,
  response: {
    200: category,
    400: errorSchema,
  },
};

export const categoryCreationSchema = {
  tags,
  description: 'Create a new category.',
  body: createCategoryRequestBody,
  response: {
    201: category,
    400: errorSchema,
  },
};

export const categoryUpdateSchema = {
  tags,
  description: 'Update a category.',
  params: findCategoryParams,
  body: updateCategoryRequestBody,
  response: {
    200: category,
    400: errorSchema,
  },
};

export const categoryRemoveSchema = {
  tags,
  description: 'Remove a category by id.',
  params: findCategoryParams,
  response: {
    400: errorSchema,
  },
};

export type FindCategoryParams = Static<typeof findCategoryParams>;
export type CreateCategoryBody = Static<typeof createCategoryRequestBody>;
export type UpdateCategoryBody = Static<typeof updateCategoryRequestBody>;
