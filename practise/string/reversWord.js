class Solution {
  //Function to reverse words in a given string.
  reverseWords(s) {
    return s.split(".").reverse().join(".");
  }
}

const s = new Solution();
const result = s.reverseWords("i.like.this.program");
console.log(result);
