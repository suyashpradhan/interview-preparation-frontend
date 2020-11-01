//Refer Notes for theory

//* Undefined Scenario
console.log(x);
myFunc();

var x = 10;
function myFunc() {
  console.log(`Hello World`);
}

//! Not Defined Scenario
myFunc();
console.log(x);
function myFunc() {
  console.log(`Hello World`);
}

//? Accessing Function (Not Invoking) Before Intializing
console.log(myFunc());
function myFunc() {
  console.log(`Hello World`);
}
