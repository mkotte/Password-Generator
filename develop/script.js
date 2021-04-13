// Assignment Code
const generateBtn = document.querySelector("#generate");

// Object of possible password character values
const characters = {
  lowercase: "abcedefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numeric: "1234567890",
  special: "!@#$%&*()"
}

// Values for password options on modal
const lowercaseOpt = document.getElementById("lowercaseOpt"); 
const uppercaseOpt = document.getElementById("uppercaseOpt");
const numericOpt = document.getElementById("numericOpt");
const specialOpt = document.getElementById("specialOpt");
const passwordLength = document.getElementById("password-length");
const modalSubmit = document.getElementById("modalSubmit");
console.log(lowercaseOpt && true)

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Create generatePassword function using values from modal
function generatePassword(){
  let valuesSelected = [];
  // conditional statement's for checkbox values
  if (lowercaseOpt.checked){
    valuesSelected += characters.lowercase
  }
  if (uppercaseOpt.checked){
    valuesSelected += characters.uppercase
  }
  if (numericOpt.checked){
    valuesSelected += characters.numeric
  }
  if (specialOpt.checked){
    valuesSelected += characters.special
  }

  console.log(valuesSelected)

  

  // value of desired length
  // math.floor(math.random()) for random password values




}

//Add event listener for modal submit
modalSubmit.addEventListener('click', generatePassword)