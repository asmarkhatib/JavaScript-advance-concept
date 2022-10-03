// 12:14:00AM;
// 12:14:00
// 04:12:10PM;
// 16:12:10

// step 1 -> if AM keep everything same just remove AM signature
// step 2 -> if 12:00:00AM return 00:00:00
// step 3 -> if PM remove PM signature add 12 into hours

// const mainClock = (time) => {
//   const clock = {
//     12: 12,
//     1: 13,
//     2: 14,
//     3: 15,
//     4: 16,
//     5: 17,
//     6: 18,
//     7: 19,
//     8: 20,
//     9: 21,
//     10: 22,
//     11: 23,
//   };
//   let a = clock.toString();
//   let times = "00:00:00";
//   let timeSlice = times.slice(0, 2);
//   a.forEach((ele) => {
//     if (ele == timeSlice) {
//       time = ele + time.substring(2);
//     }
//   });
//   return times;
// };
// console.log(mainClock("12:14:00AM"));

const mainClock = (time) => {
  let ans = "";
  let amPm = time.charAt(8);
  if (amPm === "A") {
    if (time.substr(0, 2) === "12") {
      ans += "00";
    } else {
      ans += time.substr(0, 2);
    }
  } else {
    if (time.substr(0, 2) === "12") {
      ans += "12";
    } else {
      ans += Number(time.substr(0, 2)) + 12;
    }
  }
  return (ans += time.substr(2, 6));
};
console.log(mainClock("01:14:00PM"));
