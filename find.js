let a = [
  [1, 2, 3],
  "str",
  "name",
  undefined,
  {},
  null,
  5,
  "saqeb",
  3,
  4,
  undefined,
  undefined,
  null,
  [1, 2],
  33,
  null,
  "string",
  "mystr",
  null,
];

// const finded = a.find((ele) => {
//   if (typeof ele === "number") {
//     return ele;
//   }
// });

const finded = a.find((ele) => typeof ele === "string");
console.log(finded);
