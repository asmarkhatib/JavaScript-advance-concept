const field = (area, noOfWires, costPerMeter) => {
  let total = 0;
  area.forEach((ele) => {
    total += ele;
  });
  const totalCost = total * costPerMeter * noOfWires;
  return totalCost;
};
console.log(field([10, 20, 10, 20], 3, 10));
// console.log(total);
