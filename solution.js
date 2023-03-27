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

export let calculator = {
  add: function (x, y) {
    return x + y;
  },
  subtract: function (x, y) {
    return x - y;
  },
  divide: function (x, y) {
    return x / y;
  },
  multiply: function (x, y) {
    return x * y;
  },
};

function isLetter(c) {
  c = String.fromCharCode(c);
  return c.toLowerCase() != c.toUpperCase();
}

export function caesarCipher(string, factor = 0) {
  if (!string) return "Type a string to be encrypted";

  let encryptedString = "";

  for (let i = 0; i < string.length; i++) {
    // If it's a space, keep it
    if (string.charCodeAt(i) == "32") encryptedString += " ";
    // If it's not a letter, probably ponctuation, then keep it
    else if (!isLetter(string.charCodeAt(i)))
      encryptedString += String.fromCharCode(string.charCodeAt(i));
    // Else if it's not a space, and it's a letter, then encrypt it
    else {
      // If char is Uppercased
      if (string.charCodeAt(i) <= 90) {
        if (string.charCodeAt(i) + factor > 90) {
          encryptedString += String.fromCharCode(
            64 + (string.charCodeAt(i) + factor - 90)
          );
        } else
          encryptedString += String.fromCharCode(string.charCodeAt(i) + factor);
      }
      // If char is lowercased
      else {
        if (string.charCodeAt(i) + factor >= 122) {
          encryptedString += String.fromCharCode(
            96 + (string.charCodeAt(i) + factor - 122)
          );
        } else
          encryptedString += String.fromCharCode(string.charCodeAt(i) + factor);
      }
    }
  }
  return encryptedString;
}
