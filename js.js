// const arr = ["1", "2", "3", "4"];
// let myArr = [];
// const outPut = arr.forEach((ele) => {
//   myArr.push(Number(ele));
// });
// console.og(myArr);

// Email ID validation
// inp -> saqebk619@gmail.com retrun -> true;
// inp -> saqebk619gmail.com retrun -> false;

// const emailValidation = (email) => email.includes("@", ".");
// console.log(emailValidation("asmarkhatibgmail.com"));

// .in raho .com raho .net raho .tech raho,
// @gmail raho @yahoo raho @facebook raho
// ye sab bhi to valid email ids hai,

// Aurangabad to Pune, Distance 236 km, Average of the vehicle 16 km/h, cost of petrol per liter 100
// Find the travel cost with reusable function. with optimum solution ?

// const travelCost = (distance, avg, petrolPrice) =>
//   (distance / avg) * petrolPrice;
// console.log(travelCost(236, 16, 100));

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





