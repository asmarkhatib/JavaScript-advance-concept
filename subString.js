// Note that the substring method is not work on Array;
// The substring method is only working on the string ;
// const fruit = ["Mango", "Apple", "Orange", "Banana"];
// const arr = fruit.toString();
// const arr1 = arr.substring(arr.indexOf("A"));
// console.log(arr1);

const str = "Apple, Orange, Mango, Kiwi";
const strNew = str.substring(str.indexOf("O"), str.indexOf("K"));
console.log(strNew);
