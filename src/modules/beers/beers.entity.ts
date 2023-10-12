import { z } from 'zod';
import { BASIC_SEARCH_REGEX } from '../../globals/constants';
import { limitSearchID } from '../../globals/utilities';

export const BasicSearchEntity = z.object({
  filter: z.string().regex(BASIC_SEARCH_REGEX).refine(limitSearchID, {
    message: 'The ID must be between 1 and 325',
  }),
});
