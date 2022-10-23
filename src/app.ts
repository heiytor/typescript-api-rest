import express from 'express';
import { home } from './routes/home';

class App {
  public app;

  constructor() {
    this.app = express()
    this.middlewares();
    this.routes()
  }

  middlewares(): void {
    this.app.use(express.json());
  }

  routes(): void {
    this.app.use('/', home)
  }
}

const app = new App().app;

export { app };