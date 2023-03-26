import { capitalize, reverseString } from "./solution";

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
