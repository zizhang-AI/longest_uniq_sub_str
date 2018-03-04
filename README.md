# Longest Substring without Repeats

## To Run
First, please install packages with `yarn install`. Then run `yarn start` which will start the console application.

e.g. Input: `moneycashshopbackcashmoney`

Output: `10`

## Explanation
The algorithm maintains a window and a lookup table to track characters which already exist in the window. `startPos` is the window's starting position, and index `i` is its ending positiion. If the `i`th character is not found in the window, the window expands by 1 character to the right, and the position of this character is updated in the lookup table; otherwise the window's starting position will be the next character following the repeated character inside the window.
