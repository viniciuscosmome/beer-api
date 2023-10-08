export const ageLimit = (age: number) => {
  return new Date(new Date().getFullYear() - age, 11, 31);
};
