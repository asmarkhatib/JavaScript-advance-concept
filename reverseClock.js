// input = 13:14:00;
// output = 1:14:00PM;

const reverseClock = (time) => {
  let ans = "";
  if (time.substr(0, 2) === "00") {
    ans += "12";
    return ans + time.substr(2, 6) + "AM";
  } else if (time.substr(0, 2) === "12") {
    ans += "12";
    return ans + time.substr(2, 6) + "PM";
  } else if (time.substr(0, 2) > "12") {
    ans += Number(time.substr(0, 2)) - 12;
    return ans + time.substr(2, 6) + "PM";
  } else {
    return time + "AM";
  }
};
console.log(reverseClock("16:59:13"));
