export function capitalize(string) {
  if (string.length < 1) return "Type a string to be capitalized";
  string = string[0].toUpperCase() + string.slice(1);
  return string;
}

export function reverseString(string) {
  if (string.length < 1) return "Type a string to be reversed";

  let reversedString = "";

  for (let i in string) reversedString += string[string.length - 1 - i];
  return reversedString;
}
