// find the lowest to highest number;
// input -> [40, 100, 1, 5, 25, 10];
// output -> [1, 5, 10, 25, 40, 100]

const a = [40, 100, 1, 5, 25, 10];
a.sort((a, b) => a - b);
// const y = Math.max.apply(null, a);
// or you can use direct array in to it.
const y = Math.max()
console.log(a);
console.log(y);

// find the hightest to lowest number;
const b = [40, 100, 1, 5, 25, 10];
// b.sort(function (a, b) {
//   return b - a;
// });
b.sort((a, b) => b - a);
console.log(b);

// sort by aphabetical order
// input -> ['E', 'G', 'T', 'Q', 'A', 'D', 'B', 'C'];
const x = ["E", "G", "T", "Q", "A", "D", "B", "C"];
x.sort();
console.log(x);

// find the
