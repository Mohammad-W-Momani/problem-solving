// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"


function maxChar(str) {
    let count = {};
    let maxKey = "";
    for (let i = 0; i < str.length; i++) {
      if (!count[str[i]]) {
        count[str[i]] = 0;
      }
      count[str[i]]++;
      if (maxKey == "" || count[str[i]] > count[maxKey]) {
        maxKey = str[i];
      }
    }
   return  maxKey
  }

module.exports = maxChar;
