import { z } from 'zod';
import {
  BASIC_SEARCH_REGEX,
  BEERS_BREWED_REGEX,
  BEERS_IDS_REGEX,
  TEXT_SEARCH_REGEX,
} from '../../globals/constants';
import {
  checkBrewedDateRange,
  checkIfAnyIDIsOutOfLimit,
  limitSearchID,
} from '../../globals/utilities';
import { responses } from '../../globals/responses';

export const BasicSearchEntity = z.object({
  filter: z
    .string(responses.datatype.string)
    .regex(BASIC_SEARCH_REGEX, responses.custom.basicSearch)
    .refine(limitSearchID, responses.custom.idLimit),
});

export const AdvancedSearchEntity = z.object({
  page: z.coerce
    .number(responses.datatype.number)
    .int(responses.datatype.int)
    .min(1, responses.conditions.min(1))
    .optional(),
  per_page: z.coerce
    .number(responses.datatype.number)
    .int(responses.datatype.int)
    .min(1, responses.conditions.min(1))
    .max(80, responses.conditions.max(80))
    .optional(),
  abv_gt: z.coerce.number(responses.datatype.number).optional(),
  abv_lt: z.coerce.number(responses.datatype.number).optional(),
  ibu_gt: z.coerce.number(responses.datatype.number).optional(),
  ibu_lt: z.coerce.number(responses.datatype.number).optional(),
  ebc_gt: z.coerce.number(responses.datatype.number).optional(),
  ebc_lt: z.coerce.number(responses.datatype.number).optional(),
  beer_name: z
    .string(responses.datatype.string)
    .trim()
    .regex(TEXT_SEARCH_REGEX, responses.custom.textSearch)
    .optional(),
  yeast: z
    .string(responses.datatype.string)
    .trim()
    .regex(TEXT_SEARCH_REGEX, responses.custom.textSearch)
    .optional(),
  brewed_before: z
    .string(responses.datatype.string)
    .trim()
    .regex(BEERS_BREWED_REGEX, responses.custom.brewedDate)
    .refine(checkBrewedDateRange, responses.custom.brewedLimit)
    .optional(),
  brewed_after: z
    .string(responses.datatype.string)
    .trim()
    .regex(BEERS_BREWED_REGEX, responses.custom.brewedDate)
    .refine(checkBrewedDateRange, responses.custom.brewedLimit)
    .optional(),
  hops: z
    .string(responses.datatype.string)
    .trim()
    .regex(TEXT_SEARCH_REGEX, responses.custom.textSearch)
    .optional(),
  malt: z
    .string(responses.datatype.string)
    .trim()
    .regex(TEXT_SEARCH_REGEX, responses.custom.textSearch)
    .optional(),
  food: z
    .string(responses.datatype.string)
    .trim()
    .regex(TEXT_SEARCH_REGEX, responses.custom.textSearch)
    .optional(),
  ids: z
    .string(responses.datatype.string)
    .trim()
    .regex(BEERS_IDS_REGEX, responses.custom.idsFormat)
    .refine(checkIfAnyIDIsOutOfLimit, responses.custom.idLimit)
    .optional(),
});
