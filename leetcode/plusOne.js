/**
 * @param {number[]} digits
 * @return {number[]}
 */
// var plusOne = function (digits) {
//   let lastIndex = digits.length - 1;

//   if (digits[lastIndex] < 9) {
//     digits[lastIndex]++;
//     return digits;
//   } else {
//     for (let i = lastIndex; i >= 0; i--) {
//       if (digits[i] === 9) {
//         if (i === 0) {
//           digits[0] = 0;
//           let arr = [1, ...digits];
//           return arr;
//         } else {
//           digits[i] = 0;
//         }
//       } else {
//         digits[i] += 1;
//         break;
//       }
//     }
//     return digits;
//   }
// };

//by ibio
var plusOne = function (digits) {
  for (var i = digits.length - 1; i >= 0; i--) {
    digits[i]++;
    if (digits[i] > 9) {
      digits[i] = 0;
    } else {
      return digits;
    }
  }
  digits.unshift(1);
  return digits;
};

console.log(plusOne([8, 9, 9]));
