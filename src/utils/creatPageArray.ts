export const creatPageArray = (totalPages: number) => {
  const pageArray = Array(totalPages)
    .fill(0)
    .map((_, i) => i + 1);
  return pageArray;
};
