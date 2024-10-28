function parking(n, yesterday, today) {
  let count = 0;
  for (let i = 1; i < n; i++) {
    if (yesterday[i] === "C" && today[i] === "C") {
      count++;
    }
  }
  return count;
}

console.log(parking(5, "CC..C", ".CC.."));
