export const ageLimit = (age: number) => {
  return new Date(new Date().getFullYear() - age, 11, 31);
};

export const limitSearchID = (param: string) => {
  if (param === 'random') return true;

  const id = Number(param);

  return id > 0 && id <= 325;
};
