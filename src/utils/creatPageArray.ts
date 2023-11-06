const chunkArray = (array: number[], chunkSize: number) => {
  const result = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
};

export const creatPageArray = (
  totalPages: number,
  currentPage: number,
  sliceNumber: number = 5
): number[] => {
  const baseArray = Array(totalPages)
    .fill(0)
    .map((_, i) => i + 1);
  const pageArray = chunkArray(baseArray, sliceNumber)[
    Math.ceil(currentPage / sliceNumber) - 1
  ];
  return pageArray;
};
