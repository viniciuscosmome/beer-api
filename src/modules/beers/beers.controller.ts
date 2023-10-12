import { Request, Response } from 'express';
import { AdvancedSearchEntity, BasicSearchEntity } from './beers.entity';
import { beersService } from './beers.service';

export const beersController = {
  async findManyBeers(req: Request, res: Response) {
    const filters = AdvancedSearchEntity.parse(req.query);
    const beers = await beersService.findBeersWithAdvancedFilters(filters);

    return res.status(200).json({ length: beers.length, beers });
  },

  async singleBeer(req: Request, res: Response) {
    const { filter } = BasicSearchEntity.parse(req.params);
    const beers = await beersService.findBeersWithBasicFilters(filter);

    return res.status(200).json({ length: beers.length, beers });
  },
};
