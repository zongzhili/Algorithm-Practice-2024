function DecimalToBin(decimal) {
  let binary = [];
  for (i = 7; i >= 0; i--) {
    if (decimal >= Math.pow(2, 7 - i)) {
      decimal = decimal - Math.pow(2, i);
      binary[i] = 1;
    } else {
      binary[i] = 0;
    }
  }
  return binary;
}
console.log(DecimalToBin(13));
