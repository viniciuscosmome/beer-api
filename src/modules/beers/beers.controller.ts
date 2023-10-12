import { Request, Response } from 'express';
import { BasicSearchEntity } from './beers.entity';
import { beersService } from './beers.service';

export const beersController = {
  async singleBeer(req: Request, res: Response) {
    const { filter } = BasicSearchEntity.parse(req.params);

    const beers = await beersService.findBeersWithBasicFilters(filter);

    return res.status(200).json({ beers });
  },
};
