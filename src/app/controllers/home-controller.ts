import { Request, Response } from 'express';

class HomeController {
  public async index(_: Request, res: Response): Promise<Response> {
    return res.sendStatus(204);
  }
}

export default new HomeController();
