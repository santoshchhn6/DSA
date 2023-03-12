function sqrt(x) {
  let i = 1;
  while (i * i <= x) {
    i++;
  }
  return i - 1;
}

console.log(sqrt(25));
