// Assignment Code
var generateBtn = document.querySelector("#generate");
// function to generate password
function generatePassword(){
var password = ""
var characters = "";
var upperCase = "ABCDEFGHIJKMNOPQRSTUVWXuYZ";
var lowCase = "abcdeghhijkmnopqrstuvwxyz";
var specChar = "!@#$%^&*()?.<\>|=+:;,[-_]";
var Num = "0123456789";

// prompts that will pop up on screen
var userChoicePasswordLength = prompt('How many characters?');
if (userChoicePasswordLength < 8 || userChoicePasswordLength > 128){ 
  alert("Password must be bewtween 8 & 128");
  generatePassword();
};
var userChoicelower = ('Use lower case?');
var userChoiceUpper = confirm('use upper case?');
var userChoiceNumbers = confirm('use numbers?');
var userChoiceSpecials = confirm('use special characters?');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
