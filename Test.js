const numbers = [10, 40, 20, 60, 50];
//  Array mapping
// const doubled = [];
// for (const double of numbers) {
//   const result = double * 2;
//   doubled.push(result);
// }
// console.log(doubled);

// function double(num) {
//   return num * 2;
// }

const numbers2 = [10, 40, 20, 60, 8000];

// const doubleIt = (n) => n * 2;
// const result = numbers2.map(doubleIt);
// console.log(result);
// !MOST EFFICIENT WAY
const tripleIt = numbers2.map((n) => n * 3);
// console.log(tripleIt);

// * in string
const name = ["tamim", "ramim", "hamim", "Ibrahim"];

const length = name.map((nam) => nam.length);
console.log(length);
