import { PunkApi } from '../../lib/axios';
import { handleErrors } from '../../globals/errors';

export const beersService = {
  async findBeersWithAdvancedFilters(filters: object) {
    const search = await PunkApi.get('', { params: filters })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        handleErrors(error);
        return [];
      });

    return search;
  },

  async findBeersWithBasicFilters(filter: string) {
    const beer = await PunkApi.get(filter)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        handleErrors(error);
        return [];
      });

    return beer;
  },
};
