//Destructuring in Arrays
const users = ["Suyash", "John", "Jane", "Mike", "Rohit", "Virat"];
const [myName, ...rest] = users;

console.log(rest);

//Destructuring in Objects
const obj = {
  name: "Suyash",
  age: 24,
  jobDesignation: "Front End Developer",
  demo() {
    console.log(`My Name Is ${this.name}`);
  },
};

const { name, age, ...info } = obj;
console.log(info);
