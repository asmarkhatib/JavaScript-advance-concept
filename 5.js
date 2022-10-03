const funct = (arr) => {
  const cut = arr.splice(0, 2);
  return cut;
};

console.log(funct([1, 2, 3, 4, 5, 6, 7, 8]));
