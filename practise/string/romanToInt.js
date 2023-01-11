var romanToInt = function (s) {
  let num = 0;
  let prevChar = null;
  let nextChar = null;

  for (let i = 0; i < s.length; i++) {
    if (i + 1 < s.length) nextChar = s[i + 1];
    else nextChar = null;

    let current = s[i];
    switch (current) {
      case "I":
        if (nextChar !== "V" && nextChar !== "X") num++;
        break;

      case "V":
        num += 5;
        if (prevChar == "I") num--;
        break;

      case "X":
        if (nextChar !== "L" && nextChar !== "C") {
          num += 10;
          if (prevChar == "I") num--;
        }
        break;

      case "L":
        num += 50;
        if (prevChar == "X") num -= 10;
        break;

      case "C":
        if (nextChar !== "D" && nextChar !== "M") {
          num += 100;
          if (prevChar == "X") num -= 10;
        }
        break;

      case "D":
        num += 500;
        if (prevChar == "C") num -= 100;
        break;

      case "M":
        num += 1000;
        if (prevChar == "C") num -= 100;
        break;
    }
    prevChar = s[i];
  }
  return num;
};

console.log(romanToInt("MCMXCIV"));
