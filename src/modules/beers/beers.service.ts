import { PunkApi } from '../../lib/axios';
import { handleErrors } from '../../globals/errors';

export const beersService = {
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
