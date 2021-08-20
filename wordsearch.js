const wordSearch = (letters, word) => {
  if (letters.length === 0) { // case for when letters array is empty
    return false;
  }

  const horizontalJoin = letters.map(ls => ls.join(''));
  for (const l of horizontalJoin) { // checking the rows
    if (l.includes(word)) { // if word is in the row
      return true;
    }
  }
  
  const colLength = letters[0].length; // how many elements are in the first subarray
  const rowLength = letters.length; // how many arrays are in the big array
  let verticalJoin = [];
  for (let col = 0; col < colLength; col++) {
    let verticalWord = '';
    for (let row = 0; row < rowLength; row++) {
      verticalWord = verticalWord + letters[row][col];
    }
    verticalJoin.push(verticalWord);
  }
  for (const l of verticalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }
  return false;
};

module.exports = wordSearch;