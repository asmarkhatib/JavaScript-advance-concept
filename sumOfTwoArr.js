let a = [1, 2, 3, 4];
let b = [9, 8, 7, 6];
// let sum;
// let allSum = [];
// for (let i = 0; i < a.length; i++) {;
//   allSum.push( a[i] + b[i]);
// }

// console.log(allSum);

const sum = b.map((ele, i) => ele + a[i]);
console.log(sum);


