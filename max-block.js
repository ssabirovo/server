function maxBlock(str = "hoopla") {
  let currentChar = str[0];
  let currentCounter = 1;
  let maxValue = 0;

  for (let i = 1; i < str.length; i++)
    if (currentChar === str[i]) currentCounter++;
    else {
      currentChar = str[i];
      if (currentCounter > maxValue) maxValue = currentCounter;
      currentCounter = 1;
    }

  if (maxValue === 0) return 0;
  return currentCounter < maxValue ? maxValue : currentCounter;
}
console.log(maxBlock("hoopla"));
/**
 *        012345
 * str = "hoopla"; strLen = 6;
 *
 * Cases:
 *  i = 1; currentChar = "h"; maxValue=0; currentCounter = 1 ->  currentChar = "o"; maxValue = 1;
 *  i = 2; currentChar = "o"; maxValue=1; currentCounter = 1 ->  currentCounter = 2;
 *  i = 3; currentChar = "o"; maxValue=1; currentCounter = 2 ->  currentChar = "p"; maxValue = 2;
 *  i = 4; currentChar = "p"; maxValue=2; currentCounter = 2 ->  currentChar = "p"; maxValue = 2;
 *
 *
 */
