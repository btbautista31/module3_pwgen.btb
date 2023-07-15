// Assignment Code
var generateBtn = document.querySelector("#generate");

//Generate Password Function
function generatePassword () {
  console.log("Button clicked!");
  //Prompts
    //Prompt for length
      var pwLength = prompt("Enter password length: ");
      console.log("Password Length: " + pwLength);
    //Prompt for casing
      var pwUpper = confirm("Include Upper Case?: Ok = Yes or Cancel = No");
      console.log("Upper Case: " + pwUpper)
      var pwLower = confirm("Include Lower Case?: Ok = Yes or Cancel = No");
      console.log("Lower Case: " + pwLower);
    //Prompt for numbers
      var pwNumber = confirm("Include Numbers?: Ok = Yes or Cancel = No");
      console.log("Numbers: " + pwNumber);

    //Prompt for special characters
    var pwSpecial = confirm("Include Special Characters?: Ok = Yes or Cancel = No");
    console.log("Special Characters: " + pwSpecial);
    
    //Object for inputs/prompts
    var keys = {
      upperCase: ["A","B","C","D"],
      lowerCase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
      number: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      special: ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"],
    }

    
    function generatedPassword() {
      let createdPassword = [];
      for(let i=0; i<pwLength; i++)
      {
        if (pwUpper == true) {
          var genChar = keys.upperCase[Math.floor(Math.random() * keys.upperCase.length)];
          createdPassword.push(genChar);
          console.log('Upper: ' + genChar);
          }
  
        else if (pwLower == true) {
          var genChar = keys.lowerCase[Math.floor(Math.random() * keys.lowerCase.length)];
          createdPassword.push(createdPassword*genChar);
          console.log('Lower: ' + genChar);
          }
        else if (pwNumber == true) {
          var genChar = keys.number[Math.floor(Math.random() * keys.number.length)];
          createdPassword.push(genChar);
          console.log('Number: ' + genChar);
            }
        else if (pwSpecial == true) {
          var genChar = keys.special[Math.floor(Math.random() * keys.special.length)];
          createdPassword.push(genChar);  
          console.log('Special: ' + genChar);
      }
    }
    console.log(createdPassword);
  }
generatedPassword();


    
  //Validate inputs
  //Generate password
  //Display password
  return "Generated Password here";

}

generatePassword();
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//Reference Code