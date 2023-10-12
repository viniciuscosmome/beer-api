import { z } from 'zod';
import {
  BASIC_SEARCH_REGEX,
  BEERS_BREWED_REGEX,
  BEERS_IDS_REGEX,
  TEXT_SEARCH_REGEX,
} from '../../globals/constants';
import {
  checkBrewedDateFormat,
  checkIfAnyIDIsOutOfLimit,
  limitSearchID,
} from '../../globals/utilities';

const IDLimitError = {
  message: 'The ID must be between 1 and 325',
};

export const BasicSearchEntity = z.object({
  filter: z
    .string()
    .regex(BASIC_SEARCH_REGEX)
    .refine(limitSearchID, IDLimitError),
});

export const AdvancedSearchEntity = z.object({
  page: z.coerce.number().int().min(1).optional(),
  per_page: z.coerce.number().int().min(1).max(80).optional(),
  abv_gt: z.coerce.number().optional(),
  abv_lt: z.coerce.number().optional(),
  ibu_gt: z.coerce.number().optional(),
  ibu_lt: z.coerce.number().optional(),
  ebc_gt: z.coerce.number().optional(),
  ebc_lt: z.coerce.number().optional(),
  beer_name: z.string().trim().regex(TEXT_SEARCH_REGEX).optional(),
  yeast: z.string().trim().regex(TEXT_SEARCH_REGEX).optional(),
  brewed_before: z
    .string()
    .trim()
    .regex(BEERS_BREWED_REGEX)
    .refine(checkBrewedDateFormat)
    .optional(),
  brewed_after: z
    .string()
    .trim()
    .regex(BEERS_BREWED_REGEX)
    .refine(checkBrewedDateFormat)
    .optional(),
  hops: z.string().trim().regex(TEXT_SEARCH_REGEX).optional(),
  malt: z.string().trim().regex(TEXT_SEARCH_REGEX).optional(),
  food: z.string().trim().regex(TEXT_SEARCH_REGEX).optional(),
  ids: z
    .string()
    .trim()
    .regex(BEERS_IDS_REGEX)
    .refine(checkIfAnyIDIsOutOfLimit, IDLimitError)
    .optional(),
});
