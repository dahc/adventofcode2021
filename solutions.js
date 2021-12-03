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

function day2(input) {
  // input parsing
  var instructions = [];
  for (var line of input.split("\n")) {
    var tokens = line.split(" ");
    var instruction = { "key": tokens[0], "value": parseInt(tokens[1]) };
    if (!isNaN(instruction.value)) {
      instructions.push(instruction);
    }
  }

  // part 1
  var position = 0, depth = 0;
  for (var instruction of instructions) {
    switch (instruction.key) {
    case "forward":
      position += instruction.value;
      break;
    case "up":
      depth -= instruction.value;
      break;
    case "down":
      depth += instruction.value;
      break;
    }
  }
  var result1 = position * depth;

  // part 2
  var position = 0, depth = 0, aim = 0;
  for (var instruction of instructions) {
    switch (instruction.key) {
    case "forward":
      position += instruction.value;
      depth += aim*instruction.value;
      break;
    case "up":
      aim -= instruction.value;
      break;
    case "down":
      aim += instruction.value;
      break;
    }
  }
  var result2 = position * depth;

  return `${result1}, ${result2}`;
}
