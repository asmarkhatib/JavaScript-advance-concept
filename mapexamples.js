const arr = [
  {
    name: "Asmar Khatib",
    age: 23,
    height: 5.89,
    gender: "Male",
  },
  {
    name: "Saqeb Khan",
    age: 22,
    height: 5.74,
    gender: "Male",
  },
  {
    name: "Maaz Shaikh",
    age: 22,
    height: 5.5,
    gender: "Male",
  },
  {
    name: "Mosin Shaikh",
    age: 23,
    height: 5.5,
    gender: "Male",
  },
];

// Create a array of only contains name;
// Create a array of contain only height;
// Create a array of object thats contains name and gender;
// Create a array of getting only First names;

const names = arr.map((ele) => ele.name);
console.log(names);

const heights = arr.map((ele) => ele.height);
console.log(heights);

const nameAndGender = arr.map((ele) => ({
  name: ele.name,
  gender: ele.gender,
}));
console.log(nameAndGender);

const firstName = arr.map((ele) => ele.name.split(" ")[0]);
console.log(firstName);
