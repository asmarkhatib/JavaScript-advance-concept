// input -> [12, 8, 14]
// output -> [26, 18, 30]

// const a = [12, 8, 14];
// const b = [];
// a.forEach((ele) => b.push(ele + ele + 2));
// console.log(b);

// a = [1, 2, 3, 4]
// b = [9, 8, 7, 6]
// output -> [10, 10, 10, 10]

const a = [1, 2, 3, 4];
const b = [9, 8, 7, 6];
let x = [];
a.forEach((ele, index) => x.push(ele + b[index]));
console.log(x);

