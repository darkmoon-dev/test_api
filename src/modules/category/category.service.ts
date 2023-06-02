import prisma from '../../utils/prisma';
import {
  FindCategoryParams,
  CreateCategoryBody,
  UpdateCategoryBody,
} from './category.schemas';

export default class CategoryService {
  static async findAll() {
    return prisma.category.findMany({ where: { deleted: false } });
  }

  static async findById(input: FindCategoryParams) {
    return prisma.category.findUnique({
      where: {
        id: input.id,
      },
    });
  }

  static async create(data: CreateCategoryBody) {
    return prisma.category.create({
      data,
    });
  }

  static async update(input: FindCategoryParams, data: UpdateCategoryBody) {
    return prisma.category.update({
      where: {
        id: input.id,
      },
      data,
    });
  }

  static async delete(input: FindCategoryParams) {
    prisma.category.update({
      where: {
        id: input.id,
      },
      data: {
        deleted: true,
        deletedAt: new Date(),
      },
    });
  }
}
