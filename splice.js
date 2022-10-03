// .splice() method is use to add or remove elements in array and this method dont return new array;
// Now .splice() method is used to add a new  element in an array;

// const arr = [1, 2, 3, 4, 5, 6, 7, 8];
// arr.splice(arr.length, 0, 9, 10, 11, 12);
// console.log(arr);

// Now .splice() method is used to remove a element form array;

const arr = [1, 2, 3, 4, 5, 6, 7, 8];
arr.splice(5, 3);   // here 5 is starting position in array and 3 is no. of element remove form this starting point;
console.log(arr);
