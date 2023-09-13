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
