export const ageLimit = (age: number) => {
  return new Date(new Date().getFullYear() - age, 11, 31);
};

export const limitSearchID = (param: string) => {
  if (param === 'random') return true;
  const id = Number(param);

  return id > 0 && id <= 325;
};

export const checkIfAnyIDIsOutOfLimit = (param: string) => {
  if (!param) return false;
  const IDsOutOfLimit = param.split('|').filter((id) => {
    return !limitSearchID(id);
  });

  return !IDsOutOfLimit.length;
};

export const checkBrewedDateRange = (date: string) => {
  if (!date) return false;

  const [month, year] = date.split('-').map((value) => Number(value));
  const validMonth = month > 0 && month < 13;
  const validYear = year > 0 && year < 2500;

  return validMonth && validYear;
};
