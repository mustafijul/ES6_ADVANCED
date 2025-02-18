const numbers = [2, 4, 5, 6, 8];
//* Mapping used
const doubledN = (n) => n * 2;
const result = numbers.map(doubledN); //* Callback function
console.log(result);

// const doubled = [];
// for (const num of numbers) {
//   const double = num * 2;
//   doubled.push(double);
// }

// console.log(doubled);
