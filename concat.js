//concatination method of an array .concat();
//it produce always new array;

// const arr1 = ["Cecilie", "Lone"];
// const arr2 = ["Emil", "Tobias", "Linus"];
// const arr3 = ["Robin", "Morgan"];

// const addArr = arr2.concat(arr3, arr1);
// console.log(addArr);

// const class1 = [1, 2, 3, 4, 5, 6];
// const class2 = [7, 8, 9, 10, 11];
// const class3 = [12, 13, 14, 15, 16, 17];
// const class4 = [18, 19, 20];
// const class5 = [101, 102, 103, 104, 105];

// const classes = class1.concat(class2, class3, class4, class5); // .......[its return new array with all of array values;]
// // const classes = class1 + class2 + class3 + class4 + class5;  // ......[its return string;]
// //const classes = Number(class1 + class2 + class3 + class4 + class5); // [its return NaN means Not a Number;]
// console.log(classes);

const arr = ["Asmar", "Saqeb", "Maaz"];
const arrNew = arr.concat("Tohit", "Mosin", 1, 2);
console.log(arrNew);
console.log(arr);
