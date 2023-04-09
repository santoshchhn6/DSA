/**
 * @param {string} S
 * @return {string}
 */

class Solution {
  longestPalin(S) {
    let max = 0;
    let longest;
    let palindrom;

    for (let i = 0; i < S.length; i++) {
      palindrom = this.findPalindrom(S, i, i); // odd palindrom
      if (palindrom.length > max) {
        longest = palindrom;
        max = palindrom.length;
      }

      palindrom = this.findPalindrom(S, i, i + 1); //even palindrom
      if (palindrom.length > max) {
        longest = palindrom;
        max = palindrom.length;
      }
    }
    return longest;
  }

  findPalindrom(S, start, end) {
    while (start >= 0 && end < S.length) {
      if (S[start] == S[end]) {
        start--;
        end++;
      } else break;
    }
    return S.slice(start + 1, end);
  }
}

const s1 = new Solution();

const str = "aaaabbaa";
console.log(s1.longestPalin(str));
