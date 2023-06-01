import { FastifyRequest, FastifyReply } from 'fastify';

export async function checkHeath(request: FastifyRequest, reply: FastifyReply) {
  return reply.code(200).send({
    status: 'SERVER OK !',
  });
}
