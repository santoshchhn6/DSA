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
