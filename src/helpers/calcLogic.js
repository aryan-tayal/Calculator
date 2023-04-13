const operations = {
  add: (x, y) => parseFloat(x) + parseFloat(y),
  multiply: (x, y) => parseFloat(x) * parseFloat(y),
  divide: (x, y) => parseFloat(x) / parseFloat(y),
  subtract: (x, y) => parseFloat(x) - parseFloat(y),
};
const operate = (x, y, operand) => {
  switch (operand) {
    case "+":
      return operations.add(x, y);
    case "*":
      return operations.multiply(x, y);
    case "/":
      return operations.divide(x, y);
    case "-":
      return operations.subtract(x, y);
    default:
      console.log("unexpected");
      return;
  }
};
const convertToArray = (string) => {
  const arr = [];
  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    if (
      ["+", "-", "/", "*"].includes(char) ||
      i === 0 ||
      ["+", "-", "/", "*"].includes(string[i - 1])
    ) {
      arr.push(char);
    } else {
      arr[arr.length - 1] = arr[arr.length - 1] + char;
    }
  }
  return arr;
};
const calculate = (string) => {
  const output = convertToArray(string);
  while (output.includes("/")) {
    let i = output.indexOf("/");
    output.splice(i - 1, 3, operate(output[i - 1], output[i + 1], output[i]));
  }
  while (output.includes("*")) {
    let i = output.indexOf("*");
    output.splice(i - 1, 3, operate(output[i - 1], output[i + 1], output[i]));
  }
  while (output.includes("+")) {
    let i = output.indexOf("+");
    output.splice(i - 1, 3, operate(output[i - 1], output[i + 1], output[i]));
  }
  while (output.includes("-")) {
    let i = output.indexOf("-");
    output.splice(i - 1, 3, operate(output[i - 1], output[i + 1], output[i]));
  }
  return output.toString();
};

export default calculate;
