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
  console.log(passwordLength.value) 
  
  let newPassword = '';
  // math.floor(math.random()) for random password values
  for (let i = 0; i < passwordLength.value; i++){
    let randomValue = valuesSelected[Math.floor(Math.random() * valuesSelected.length)];
    newPassword += randomValue;
    console.log(randomValue)
  }
  console.log(newPassword)

}

//Add event listener for modal submit
// TODO: Change to writePassword, add something to close modal on submit, return newPassword value
modalSubmit.addEventListener('click', generatePassword)