// CRUD Operation (Create, Read, Update, Delete)
// Write a programm in which user have the ability do do folloeing thing.
// In create case if user give command to the function to create
// you should ask him what to create and the same in the output.
// If user give command to Read you should show him available data.
// In update and delete case you ask the item to be edited/ deleted
// and to the same respectively and show them the  data accordingly.

// function crud(operation, item, newValue) {
//   data = ["default value", "d v 2"];
//   if (operation === "create") {
//     data.unshift(item);
//     return data;
//   } else if (operation === "update") {
//       if (data.indexOf(item) === data.indexOf(item)) {
//         //   newValue = item;
//           item = newValue
//       }
//     return data;
//   } else if (operation === "delete") {
//     data.splice(data.indexOf(item), 1);
//     return data;
//   } else {
//     return data;
//   }
// }

// console.log(crud("update", "d v 2", "default value 2"));

let data = [];
const crud = (operation, item) => {
  if (operation === "create") {
    data.unshift(item);
  }
  return data;
};

const crud1 = (operation, item, newValue) => {
  if (operation === "update") {
    data[data.indexOf(item)] = newValue;
  }
  return data;
};

const crud2 = (operation) => {
  if (operation === "read") {
    return data;
  }
};

console.log(crud("create", "Asmar Khatib"));
console.log(crud("create", "Saqeb Khan"));
console.log(crud("create", "Tohit Khan"));
console.log(crud("create", "Mosin Shaikh"));
console.log(crud2("read"));
console.log(crud1("update", "Tohit Khan", "Maaz Shaikh"));

// const crud = (operation, item, newItem) => {
//   let data = [];
//   if (operation === "create") {
//     let x = data.unshift(item);
//     data.push(x);
//     return data;
//   }

//   if (operation === "update") {
//     data[data.indexOf(item)] = newItem;
//     return data;
//   }

//   if (operation === "read") {
//     return data;
//   }
// };
// console.log(crud("create", "Asmar Khatib"));
// console.log(crud("create", "Maaz Shaikh"));
// console.log(crud("update", "Maaz Shaikh", "Saqeb Khan"));
