import Fastify, { FastifyInstance } from 'fastify';
import pino from 'pino';
import routes from './includes/routes';
import registers from './includes/registers';
import { config } from './config';

export default class Server {
  private readonly app: FastifyInstance;

  private static signals = ['SIGINT', 'SIGTERM', 'SIGHUP'] as const;

  constructor() {
    this.app = Fastify({
      logger: pino(),
    });
  }

  public async start(): Promise<FastifyInstance> {
    registers(this.app);

    try {
      routes(this.app);

      await this.app.listen({
        port: config.SERVER_PORT,
        host: config.SERVER_HOST,
      });

      return this.app;
    } catch (error) {
      this.app.log.error(error);
      process.exit(1);
    }
  }
}
