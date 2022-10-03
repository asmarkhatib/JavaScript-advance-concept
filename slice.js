// .slice() method always create new array;
// const arr = [1, 2, 3, 4, 5, 6, 7, 8];
// const arrNew = arr.slice(2);  // here 2 is the starting point of new array; before the no.2 element get remove/ slice
// console.log(arrNew);

// anothor method is;

// const arr = [1, 2, 3, 4, 5, 6, 7, 8];
// const arrNew = arr.slice(2, 5); // here 2 is starting point and 5 is last point
// console.log(arrNew);

const fruit = "Apple, Mango, Orange";
const fruitNew = fruit.slice(fruit.indexOf("M"));
console.log(fruitNew);
