import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import routes from './routes';

class App {
  public express: express.Application;

  public constructor () {
    this.express = express();
    this.middlewares();
    this.routes();
  }

  private middlewares (): void {
    this.express.use(express.json({ limit: '300kb' }));
    this.express.use(helmet());
    this.express.use(cors());
    this.express.use(compression());
  }

  private routes (): void {
    this.express.use(routes);
  }
}

export default new App().express;
