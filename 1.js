//constructor function
function Person() {
  (this.name = "John"), (this.age = 23);
}

// creating object
const person1 = new Person();
const person2 = new Person();

// adding property to constuctor function
Person.prototype.gender = "Male";

//prototype value of Person
console.log(Person.prototype);

// inheriting the property from prototype
console.log(person1.gender);
console.log(person2.name);

//Note: The syntax to add the property to an object constructor function is:
// objectConstrouctorName.prototype.kye = 'value';

//Adding a method to constuctor function
Person.prototype.greet = function () {
  return `hello ${this.name}`;
};
console.log(person1.greet());


//for changing the value of a prototype
// let take a example :
// Peraon.prototype.age = 20;

