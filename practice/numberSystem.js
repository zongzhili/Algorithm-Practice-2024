// function binaryToDecimal(binary) {
//   const binaryString = binary.toString();
//   let sum = 0;

//   for (let i = 0; i < binaryString.length; i++) {
//     const letter = binaryString[binaryString.length - 1 - i];
//     if (letter === "1") {
//       sum += 2 ** i;
//     }
//   }

//   return sum;
// }

// console.log(binaryToDecimal(1101));

// //whalen's function
// function binaryToDec(binary) {
//   let decimal = 0;
//   for (let i = 0; i < binary.length; i++) {
//     if (binary[binary.length - i - 1] === "1") {
//       decimal = decimal + Math.pow(2, i);
//     }
//   }
//   return decimal;
// }

// console.log(binaryToDec("1101"));

//binary to decimal
//for loop through the binary (each number)
//if statements to read 0 or 1
//if the n=0, add nothing to the sum
//if n=1, add specified value to the sum
//console log the sum

//decimal to binary
//take decimal

function DecimalToBin(decimal) {
  let binary = [];
  for (i = 7; i >= 0; i--) {
    if (decimal >= Math.pow(2, i)) {
      decimal = decimal - Math.pow(2, i);
      binary[i] = 1;
    } else {
      binary[i] = 0;
    }
  }
  return binary;
}
console.log(DecimalToBin(13));

//whalen's function
function decToBinary(dec) {
  let binary = "";
  if (dec === 0) {
    return 0;
  }
  while (dec > 0) {
    let remainder = dec % 2;
    binary = remainder + binary;
    dec = Math.floor(dec / 2);
  }
  return binary;
}
console.log(decToBinary(9));
