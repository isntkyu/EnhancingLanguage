// IIFE

// output: initial value: 0
const privateCounter = (() => {
  let count = 0;
  console.log(`initial value: ${count}`);
  return () => {
    count += 1;
    console.log(count);
  };
})();

// output : 1
privateCounter();
// output : 2
privateCounter();
// output : 3
privateCounter();
