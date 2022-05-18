// checking empty array
let myArray = [];

// 0
console.log(myArray.length);

// false
console.log(myArray.length ? true : false);

// Type error
//myArray = undefined; // or null
console.log(myArray.length ? true : false);

// false
console.log(myArray && myArray.length ? true : false);

myArray = [];

// false
console.log(myArray?.length ? true : false);

// object property
myArray = [{ id: 1 }];

// true
console.log(myArray?.[0]?.id ? true : false);

//false
console.log(myArray?.[0]?.name ? true : false);

// coalescing operator
// 1
console.log(myArray?.[0]?.id ?? false);

// false
console.log(myArray?.[0]?.name ?? false);

// string
myArray = "Isntkyu";

// true
console.log(myArray && myArray.length ? true : false);

// true
console.log(myArray?.length ? true : false);

// false
console.log(Array.isArray(myArray));

myArray = [{ id: 1 }];

// true
console.log(Array.isArray(myArray) && myArray.length ? true : false);

// true
// false
console.log(Array.isArray(myArray) && myArray[0]?.id ? true : false);
console.log(Array.isArray(myArray) && myArray[0]?.name ? true : false);
