// output: initial credits value: 3
const credits = ((num) => {
  let credits = num;
  console.log(`initial credits value: ${credits}`);
  return () => {
    credits -= 1;
    if (credits > 0)
      console.log(`playing game, ${credits} credits(s) remaining`);
    if (credits <= 0) console.log(`not enough credits`);
  };
})(3);

// output: playing game, 2 credits(s) remaining
credits();
// output: playing game, 1 credits(s) remaining
credits();
// output: not enough credits
credits();
