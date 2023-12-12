// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordTextEl = document.querySelector('.passwordHolder');

var lowerCaseLetters = 'abcdefghijkmnlopqrstuvwxyz';
var lowerCaseArr = lowerCaseLetters.split('');
var upperCaseArr = lowerCaseLetters.toUpperCase().split('');
var numberArr = [0, 1, 2, 3, 4, 5, 6, 7, 8 ,9];
var specialChars = '!@#$%^&*{}[]';
var specialArr = specialChars.split('');

function generatePassword(){
var finalCharsArr = [];
var finalPasswordArr = [];

var userChoicePasswordLength = prompt('How many characters?');
var userChoicelower = confirm('Use lower case?');
var userChoiceUpper = confirm('use upper case?');
var userChoiceNumbers = confirm('use numbers?');
var userChoiceSpecials = confirm('use special characters');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
