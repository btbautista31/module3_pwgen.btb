// Assignment Code
var generateBtn = document.querySelector("#generate");

//Generate Password Function
function generatePassword () {
  console.log("Button clicked!");
  //Prompts
      //Prompt for length
      for (var s = 0; s < 1; s+0) {
      var pwLength = prompt("Enter password length(between 8 and 128): ");     
        if (pwLength < 8 || pwLength > 128) {
          alert("Length must be between 8 and 128. Please try again");
          }
        else if (pwLength >= 8 || pwLength <= 128) {
          console.log("Password length is good.");
          s++;
            }
        else {
          alert("Length cannot be a letter. Please choose a number between 8 and 128.");
        }
      }
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

      //Character container
      var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
      var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
      var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
      var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+", "/", "?", "<", ">"];


  //Random character generator
      var pwChars = []
      if (pwSpecial) {pwChars = pwChars.concat(special)}
      if (pwNumber) {pwChars = pwChars.concat(number)}
      if (pwLower) {pwChars = pwChars.concat(lowerCase)}
      if (pwUpper) {pwChars = pwChars.concat(upperCase)}

  //For loop to generate password  
      var generatedPasword = ""
        for (var i = 0; i < pwLength; i++) {
        generatedPasword = generatedPasword + pwChars[Math.floor(Math.random() * pwChars.length)];
        console.log(generatedPasword)
        }
  
  //Display password
      return generatedPasword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);