import { Request, Response } from 'express';
import { NotFoundException } from '../../globals/exceptions';

export const generalController = {
  async home(req: Request, res: Response) {
    return res.redirect('/docs');
  },

  async all() {
    throw new NotFoundException('O caminho informado não existe.');
  },
};
