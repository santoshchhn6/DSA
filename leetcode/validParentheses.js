function isValid(s) {
  const p = new Map([
    ["(", ")"],
    ["{", "}"],
    ["[", "]"],
  ]);

  let parentheses = [];

  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (char === "(" || char === "[" || char === "{") parentheses.push(char);
    if (char === ")" || char === "]" || char === "}") {
      let removedChar = parentheses.pop();
      if (char !== p.get(removedChar)) return false;
    }
  }

  if (parentheses.length > 0) return false;

  return true;
}

console.log(isValid("(("));

//by lanshunfang
// var isValid = function(s) {
//     const stack = [];
//     const map = {
//       '(': ')',
//       '[': ']',
//       '{': '}'
//     }

//     for (let i = 0 ; i < s.length ; i++) {
//         let c = s[i];
//         if (map[c]) {
//           stack.push(map[c])
//         } else if (c !== stack.pop()) {
//           return false;
//         }
//     }

//     return !stack.length;
// };
