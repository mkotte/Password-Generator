// Assignment Code
const generateBtn = document.querySelector("#generate");

// Add arrays of possible password variables

// Add values for password options

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Create generatePassword function using values from modal
  // conditional statement for checkbox values
  // value of desired length
  // math.floor(math.random) for random password values

//Add event listener for modal submit

function generatePassword();