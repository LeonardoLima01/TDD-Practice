import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
} from "./solution";

test("Capitalize word", () => {
  expect(capitalize("")).toEqual("Type a string to be capitalized");
  expect(capitalize("a")).toEqual("A");
  expect(capitalize("odin Project")).toEqual("Odin Project");
});

test("Reverse string", () => {
  expect(reverseString("")).toEqual("Type a string to be reversed");
  expect(reverseString("Hey!")).toEqual("!yeH");
  expect(reverseString("The Odin Project")).toEqual("tcejorP nidO ehT");
});

test("Calculates basic operations", () => {
  expect(calculator.add(2, 2)).toEqual(4);
  expect(calculator.subtract(3, 3)).toEqual(0);
  expect(calculator.divide(4, 4)).toEqual(1);
  expect(calculator.multiply(5, 5)).toEqual(25);
});

test("Encrypts string to caesar cipher", () => {
  expect(caesarCipher()).toEqual("Type a string to be encrypted");
  expect(caesarCipher("Text with 0 shift factor remains the same")).toEqual(
    "Text with 0 shift factor remains the same"
  );
  expect(caesarCipher("Spaces Remain Unchanged", 1)).toEqual(
    "Tqbdft Sfnbjo Vodibohfe"
  );
  expect(caesarCipher("ThE? OdiN... ! ! !PROJECT!", 1)).toEqual(
    "UiF? PejO... ! ! !QSPKFDU!"
  );
  expect(caesarCipher("zzz", 1)).toEqual("aaa");
  expect(caesarCipher("zz ! ZZ ? abCD...", 1)).toEqual("aa ! AA ? bcDE...");
});
