// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
var strStr = function (haystack, needle) {
  return haystack.indexOf(needle);
};

const str = "sadbutsad";
const search = "but";

console.log(strStr(str, search));
