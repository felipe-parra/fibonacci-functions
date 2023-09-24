/*
Given a max screen height of each column on the page and a list of pin heights, 
return the minimum number of pins used to fit the height of the screen. 
(assume there is an unlimited supply of Pins with all heights)

pin_heights/heights = [3, 5, 7]
max_screen_height/sum

return the minimum number of heights that add up to the sum.

max_screen_height = 4 → return -1 
(cannot fit the screen size)

max_screen_height = 10 → return 2 
(3+7 would be the chosen pin heights)

max_screen_height  = 14 → return 2 
(7+7 would be the chosen pin heights)

max_screen_height = 61 → return 9 
(7+7+7+7+7+7+7+7+5)

max_screen_height = 85 → return 13 
(7*10 + 5*3)
7*11 + 3 + 5 + 5+5 = 14, wrong answer
7*12 = 84 X return -1, wrong answer
7*13 > 85 X, return -1, wrong answer

*/
function min_pins_to_fit_screen(pin_heights, max_screen_height) {
  let dp = new Array(max_screen_height + 1).fill(Infinity);

  // we don't need any pins to fit a screen of height 0.
  dp[0] = 0;

  for (let i = 1; i <= max_screen_height; i++) {
    for (let j = 0; j < pin_heights.length; j++) {
      if (i >= pin_heights[j]) {
        dp[i] = Math.min(dp[i], dp[i - pin_heights[j]] + 1);
      }
    }
  }

  return dp[max_screen_height] === Infinity ? -1 : dp[max_screen_height];
}

console.log(min_pins_to_fit_screen([3, 5, 7], 4)); // -1
console.log(min_pins_to_fit_screen([3, 5, 7], 10)); // 2
console.log(min_pins_to_fit_screen([3, 5, 7], 14)); // 2
console.log(min_pins_to_fit_screen([3, 5, 7], 61)); // 9
console.log(min_pins_to_fit_screen([3, 5, 7], 85)); // 13

function max_screen_height_pins(pin_heights = [], screen_heigth = 0) {
  const MAX_PIN_HEIGHT = pin_heights.sort((a, b) => a - b).reverse()[0];
  console.log({});
  const timeFits = pin_heights
    .map((item) => Math.floor(screen_heigth / item))
    .sort((a, b) => a - b);

  console.log(timeFits[0] - timeFits.indexOf(-1));

  return timeFits[0] - timeFits.indexOf(-1);
}

max_screen_height_pins([3, 5, 7], 4);

/**
 * pin_heights = [1,2] = minimum is 2
 * screen_heigth = 3
 * min = 1, max = 3
 * 1 + 1 + 1 = 3 (pin_heights[0]) (3)
 * 2 = 3 (pin_heights[1]) (1)
 * 3 - 1 = 2
 *
 *
 */

// Your previous Plain Text content is preserved below:

// Pad for Felipe Parra - Software Engineer, Fullstack

function calculateRatios(arr) {
  let positiveCount = 0;
  let negativeCount = 0;
  let zeroCount = 0;

  // Step 2.2: Iterate through each number in the array
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) positiveCount++; // Positive number
    else if (arr[i] < 0) negativeCount++; // Negative number
    else zeroCount++; // Zero
  }

  // Step 2.4: Calculate the ratios
  let positiveRatio = positiveCount / arr.length;
  let negativeRatio = negativeCount / arr.length;
  let zeroRatio = zeroCount / arr.length;

  // Step 2.5: Print the result with 6 decimal places
  console.log(arr.length);
  console.log(positiveRatio.toFixed(6));
  console.log(negativeRatio.toFixed(6));
  console.log(zeroRatio.toFixed(6));
}

console.log(calculateRatios([-4, 3, -9, 0, 4, 1]));

function getMeddianFromAnArray(arr = []) {
  const len = arr.length;
  const sortedArray = arr.sort((a, b) => a - b);

  const middleIndex =
    (Number(sortedArray[len / 2]) - 1 + Number(sortedArray[len / 2])) / 2;

  if (len % 2 !== 0) {
    console.log(sortedArray[Math.floor(len / 2)]);
    return sortedArray[Math.floor(len / 2)];
  }

  return sortedArray[Math.ceil(middleIndex)];
}
