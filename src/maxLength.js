function findMaxcLength(str) {
  const m = {};
  let maxLength = 0;
  let startPos = 0;

  for (let i = 0; i < str.length; i += 1) {
    const letter = str.charAt(i);
    if (m[letter] === undefined || m[letter] < startPos) {
      m[letter] = i;
      maxLength = Math.max(maxLength, 1 + (i - startPos));
    } else {
      startPos = m[letter] + 1;
      m[letter] = i;
    }
  }
  return maxLength;
}

export default findMaxcLength;
