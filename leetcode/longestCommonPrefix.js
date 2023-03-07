function solution(strs) {
  let pstr = strs[0];
  for (let i = 1; i < strs.length; i++) {
    let cstr = strs[i];
    let common = "";
    for (let j = 0; j < cstr.length; j++) {
      if (pstr[j] !== cstr[j]) break;
      else {
        common += cstr[j];
      }
    }
    pstr = common;
  }
  return pstr;
}

console.log(solution(["herewrw", "heroasd", "herzds"]));
