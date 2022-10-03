// input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// output = [1, 4, 9, 16, 25, 49, 64, 81, 100]
const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// attempting by for loop ;
// let x = [];
// for (let i = 0; i < a.length; i++) {
//   x.push(a[i] * a[i]);
// }
// console.log(x);

// Now attempting by 'map' method;
const x = a.map((ele) => {
  return ele * ele;
});
console.log(x);
