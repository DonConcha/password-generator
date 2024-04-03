// Assignment Code
var generateBtn = document.querySelector("#generate");

// function to generate password
function generatePassword() {
  var password = "";
  var characters = "";
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var specials = "!@#$%^&*()-_+=[]{}|;:,.<>?";

  // prompt for password length
  var passwordLength;
  while (true) {
    passwordLength = prompt("How many characters?");
    if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
      alert("Password must be between 8 & 128 characters.");
    } else {
      break;
    }
  }

  // confirm the character sets to include
  var useLowerCase = confirm("Use lower case?");
  var useUpperCase = confirm("Use upper case?");
  var useNumbers = confirm("Use numbers?");
  var useSpecials = confirm("Use special characters?");

  // character sets based on user choices
  if (useLowerCase) {
    characters += lowerCase;
  }
  if (useUpperCase) {
    characters += upperCase;
  }
  if (useNumbers) {
    characters += numbers;
  }
  if (useSpecials) {
    characters += specials;
  }

// final result of password 
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  return password;
}

// function to write password to the password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);