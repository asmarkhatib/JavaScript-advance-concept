let arr = [
  {
    name: "Saqeb",
    class: "3rd Year",
  },
  {
    name: "Maaz",
    class: "2nd Year",
  },
  {
    name: "Tohit",
    class: "1st Year",
  },
  {
    name: "Asmar",
    class: "3rd Year",
  },
];
// arr.map((ele) => {
//   if (ele.class === "3rd Year") {
//     ele.class = "4th Year";
//   }
// });

// console.log(arr);
// console.log(a);
arr.forEach((ele) => {
  if (ele.class === "string") {
    ele.class = "4th Year";
  }
});
console.log(arr);
