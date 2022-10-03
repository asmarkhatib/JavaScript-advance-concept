let a = [
  {
    name: "Saqeb",
    designation: "Associate",
    address: "Aurangabad",
  },
  {
    name: "Sameer",
    designation: "Senior",
    address: "Mumbai",
  },
  {
    name: "Asmar",
    designation: "Jr",
    address: "Parbhani",
  },
  {
    name: "Tohit",
    designation: "Senior",
    address: "Pune",
  },
];

// {
// Senior: 2,
//  Associate: 1,
//  Jr: 1
// }
let b = {};
// a.forEach((ele) => {
//   if (ele.designation === "Senior Software Engineer") {
//     b.push(ele);
//   }
// });
// a.forEach((ele) => {
//    if (ele.designation === "Software Engineer") {
//     b.push(ele);
//   }
// })

b.senior = 1;
b["senior"]++;
b.associate = 1;
b["associate"]++;
b.jr = 1;
b["jr"]++;

console.log(b);
