/**
 * @param {string} a
 * @param {string} b
 * @returns {boolean}
 */

function isAnagram(a, b) {
  if (a.length !== b.length) return false;
  if (sortAlphabet(a) === sortAlphabet(b)) return true;
  return false;
}

function sortAlphabet(str) {
  return str.split("").sort().join("");
}

console.log(isAnagram("geeksforgeeks", "forgeeksgeeks"));
