module.exports = function check(str, brackets) {
  const pairs = new Map(brackets);
  const stack = [];
  for (const char of str) {
    pairs.get(stack.at(-1)) == char? stack.pop() : stack.push(char);
  }
  return stack.length === 0;
}