//No Parenthesis
const square = (x) => {
  return x * x;
};
console.log(square(4));

//Empty Function
const test = () => {};

//One Liner (Implicit Return)
const even = (x) => x % 2 === 0;
console.log(even(14));

const check = (x, y) => x * y;
console.log(check(4, 9));

//!Arrow Functions In Object Literal
let cards = () => ({
  name: "Suyash",
  age: 24,
});

cards();

//Arrow Function vs Normal Function
class Person {
  constructor(name) {
    this.name = name;
  }

  printName() {
    setTimeout(() => {
      console.log(this);
      setTimeout(() => {
        console.log(this);
        setTimeout(() => {
          console.log(`Arrow Function ${this.name}`);
        }, 2000);
      }, 1500);
    }, 1000);
  }

  printPersonName() {
    setTimeout(function () {
      console.log(this);
      setTimeout(function () {
        console.log(this);
        console.log(`Normal Function ${this.name}`);
      }, 5000);
    }, 7000);
  }
}

let person = new Person("Suyash");
person.printName();
person.printPersonName();
