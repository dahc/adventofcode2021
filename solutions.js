function day1(input) {
  // input parsing
  var depths = [];
  for (var line of input.split("\n")) {
    var depth = parseInt(line);
    if (!isNaN(depth)) {
      depths.push(depth);
    }
  }

  // part 1
  var count1 = 0;
  for (var i = 1; i < depths.length; i++) {
    if (depths[i] > depths[i - 1]) {
      count1++;
    }
  }

  // part 2
  var count2 = 0;
  for (var i = 1; i < depths.length; i++) {
    const sum3 = (a, i) => a.slice(i, i + 3).reduce((a, b) => a + b);
    if (sum3(depths, i) > sum3(depths, i - 1)) {
      count2++;
    }
  }

  return `${count1}, ${count2}`;
}
