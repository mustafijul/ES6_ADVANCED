// console.log("Bismillah");

// 1. math keyword normal and array
// const numbers = (10, 20, 30, 40, 50);
// console.log(Math.max(numbers));

// const numbers2 = [10, 20, 30, 70, 20];

// console.log(Math.max(...numbers2));

//* 2. Arrow function

const add = (a, b) => a + b;
// console.log(add(30, 600));
const getPI = () => Math.PI;
// console.log(getPI());
const nums = (a, b, c) => {
  const add = a + b + c;
  const mult = a * b * c;
  const result = add + mult;
  return result;
};

// console.log(nums(3, 4, 9));

//  obj and array destructuring

const car = {
  brand: "Toyota",
  color: "Red",
};

const { brand, color } = car;
// console.log(brand, color);

// *Nested object
const person = {
  name: "John",
  age: 30,
  address: {
    street: "123 Main St",
    city: "New York",
    country: "USA",
  },
};

// console.log(person.address.street);

// Case 2
const person2 = {
  name: "John",
  age: 30,
  hobbies: ["reading", "gaming", "cycling"],
  address: {
    street: "123 Main St",
    city: "New York",
    country: "USA",
  },
};

// console.log(person2.hobbies[2]);

// * forof loop and forIn loop

const fruits = ["Apple", "Banana", "Cherry"];

for (const fruit of fruits) {
  //   console.log(fruit);
}

// * for in

const person3 = {
  name: "John",
  age: 30,
  address: {
    street: "123 Main St",
    city: "New York",
    country: "USA",
  },
};

for (const person in person3) {
  console.log(person);
}
