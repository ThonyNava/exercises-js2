/*
The following code contains syntax errors - try and fix them!

Once you fix them, run this file, it should output the correct values!
*/

let person = {
  name: "Alice",
  age: 25,
  currentAddress: "Glasgow",
  changeAddress: function (newAddress) {
    this.currentAddress = newAddress;
  },
  celebrateBirthday: function () {
    this.age = this.age + 1;
  },
};

console.log("Old address: " + person.currentAddress);
person.changeAddress("Barcelona");
console.log("New address: " + person.currentAddress);
console.log("Old age: " + person.age);
person.celebrateBirthday();
console.log("New age: " + person.age);
