// LEXICAL SCOPE

// global scope
let x = 1;

const parentFunction = () => {
  //local scope
  let myValue = 2;
  console.log(x);
  console.log(myValue);

  const childFunction = () => {
    console.log((x += 5));
    console.log((myValue += 1));
  };

  childFunction();
};
// output
// 1
// 2
// 6
// 3
parentFunction();

// ------------------------------------------------------

let x2 = 1;

const parentFunction2 = () => {
  //local scope
  let myValue = 2;
  console.log(x2);
  console.log(myValue);

  const childFunction = () => {
    console.log((x2 += 5));
    console.log((myValue += 1));
  };

  return childFunction;
};

const result = parentFunction2();
// output
// 1
// 2
// [Function] childFunction
console.log(result);

// output
// 6
// 3
result();
// output
// 11
// 4
result();
// output
// 16
// 5
result();
// output
// 16
console.log(x2);

// output
// ReferenceError
// console.log(myValue);
