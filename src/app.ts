import express, { json } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';

class App {
  public express: express.Application;

  public constructor () {
    this.express = express();
  }

  private middlewares (): void {
    this.express.use(json({ limit: '300kb' }));
    this.express.use(helmet());
    this.express.use(cors());
    this.express.use(compression());
  }
}

export default new App().express;
