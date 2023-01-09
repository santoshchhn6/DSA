class Solution {
  //Function to check if brackets are balanced or not.
  ispar(x) {
    if (x.length === 1) return false;
    let arr = [];
    for (let i = 0; i < x.length; i++) {
      let c = x[i];
      switch (c) {
        case "[":
          arr.push("[");
          break;
        case "(":
          arr.push("(");
          break;
        case "{":
          arr.push("{");
          break;
        case "]":
          if (arr.pop() !== "[") return false;
          break;
        case ")":
          if (arr.pop() !== "(") return false;
          break;
        case "}":
          if (arr.pop() !== "{") return false;
          break;
      }
    }
    if (arr.length !== 0) return false;
    else return true;
  }
}

const s = new Solution();
const result = s.ispar("{}");
console.log(result);
