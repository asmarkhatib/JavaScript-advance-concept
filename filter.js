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

// const filtered = a.filter((ele) => {
//   if (typeof ele === "object") return ele;
// });

const filtered = a.filter((ele) => typeof ele === "string");
console.log(filtered);

// console.log(typeof(2))
