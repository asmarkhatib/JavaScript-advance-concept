const ticketFrom = (name, formCity, toCity, noOfPersons) => {
  let cites = [
    "Aurangabad",
    "Jalna",
    "Partur",
    "Selu",
    "Manwatroad",
    "Parbhani",
    "Purna",
    "Nanded",
  ];
  let price = 50;
  let count1 = 0;
  let count2 = 0;
  let count = 0;
  let total = 0;

  for (let i = 0; i < cites.length; i++) {
    if (formCity === cites[i]) {
      count1 += cites.indexOf(cites[i]);
    }
    if (toCity === cites[i]) {
      count2 += cites.indexOf(cites[i]);
    }
  }
  count = Math.abs(count1 - count2);
  total += count * price * noOfPersons;
  return `Dear, ${name} your ticlet is conformed for journey from ${formCity} to ${toCity}. The number of passengers are ${noOfPersons} and your total is ${total}Rs. "WE WISE YOU HAPPY AND COMFORTABLE JOURNEY..." `;
};
console.log(ticketFrom("Govind Bhise", "Aurangabad", "Nanded", 5));
