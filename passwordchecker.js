//You are writing the user registration page for a secure web site.
​
// On the registration page, the user has to enter a user ID and a password, which has to adhere to the to following criteria:
​
// User ID and password cannot be the same
function passwordMatchId(password, userId)
{
  //Checking that password and user ID match
  if (password === userId)
  {
    //Will return the object valid with a value of false and the reason why
    return {valid: false,reason: "Password cannot match User ID"}
  }
  else
  {
    //If user Id and Password do not match returns an object with the value true.
    return { valid: true }
  }
};
// User ID and password have to be at least six characters long. Fucntion takes credential string, and string identifying the credential.
function checkCredentialLength(credential, str) {
  //Checking if the credential length is less than 6 characters
  if (credential.length < 6) {
    //Returns object valid as false and gives the reason why. Also returns which credential must be at least 6 characters.
    return {
      valid: false, reason: str + " must be at least 6 characters."
    }
  } else {
    //Returns object with a value of true if the credential is at least 6 characters long.
    return {
      valid: true
    }
  }
};
​
​
​
//User ID cannot contain the following characters: !#$. //Function takes the following parameters: User ID and the specific offending character(e.g. !, $, #)
function cantContainCharacter(userId, offendingCharacter) {
  //Identifies if the user ID contains one of the offending characters.
  if (userId.includes(offendingCharacter)) {
    //Returns an object with a value of false if the user ID includes an offending character.
    return {
      valid: false,
      reason: "User ID cannot contain any " + offendingCharacter
    }
  } else {
    //Returns an object with a value of true.
    return {
      valid: true
    }
  }
};
​
function cantContain2(userId) {
  var reasonString = "User ID contains offending character(s): ";
  // test if user ID has any offending characters
  if (userId.includes("!") || userId.includes("#") || userId.includes("$")) {
    // test if user ID has !
    if (userId.includes("!")) {
      reasonString = reasonString + "!";
    }
    // test if user ID has #
    if (userId.includes("#")) {
      reasonString = reasonString + "#";
    }
​
    // test if user ID has $
    if (userId.includes("$")) {
      reasonString = reasonString + "$";
    }
    //construct and return an object
    return {
      valid: false,
      reason: reasonString
    }
  // true if no offending characters
  } else {
    return {
      valid: true
    }
  }
};
​
//password must contain $ or ! or #
function mustContain(password) {
  if (password.includes("!") || password.includes("#") || password.includes("$")) {
    return {
      valid: true
    }
  } else {
    return {
      valid: false,
      reason: "Password must contain at least one of the following: !$#"
    }
  }
​
};
​
//Function takes parameter of user ID that checks individually for each offending character
function cantContain(userId) {
  //Defines a variable that contains an object indicating whether or not user ID contains the !
  var result = cantContainCharacter(userId, "!");
  //Checks if User ID is invalid if so return the result
  if (result.valid === false)
  {
    return result;
  }
  else // otherwise
  {
    //Assigns new value to the variable determining whether user ID contains #
    result = cantContainCharacter(userId, "#");
    // Checks if User ID contains # if so return the result ... or not!
    if (result.valid === false)
    {
      return result;
    }
    else //otherwise "or not"
    {
      //Because the previous two conditions were met, the third condition passes, it will just return the result. An If/else statement beyond this would be futile.
      result = cantContainCharacter(userId, "$");
      return result;
    }
  }
};
// Password has to contain at least one of: !#$
// Password cannot be "password"
function checkForPassword(password){
  if (password === "password"){
    return {
      valid: false,
      reason: "password cannot equal password"
    }
  } else {
    return {
      valid: true
    }
  }
};
//
// For each rule create a function that checks the string for the password or username and returns one of two objects.; either if { valid:true } or { valid: false; reason Missing $} with the reason for the rule failing.
//
// Than create a main function that runs all functions and prints out all failures for all rules.
​
function main(userId, password) {
  //defines variable badResults as an array
  var badResults = [];
  //defines a variable that calls the passwordMatchId function
  var result = passwordMatchId(password, userId);
  //if passwordMatchId is false, add result to badResults
  if (result.valid === false) {
    badResults = badResults.concat(result);
  }
  //sets result to the return of cantContain2 function
  result = cantContain2(userId);
  //if cantContain2 is false, add result to badResults
  if (result.valid === false) {
    badResults = badResults.concat(result);
  }
  result = mustContain(password);
  //if mustContain is false, add result to badResults
  if (result.valid === false) {
    badResults = badResults.concat(result);
  }
  //sets result to return of user ID length function
  result = checkCredentialLength(userId, "userId");
  //if user ID length is too short, add result to badResults
  if (result.valid === false) {
    badResults = badResults.concat(result);
  }
  //sets result to return of password length function
  result = checkCredentialLength(password, "password");
  //if password length is too short, add result to badResults
  if (result.valid === false) {
    badResults = badResults.concat(result);
  }
  //returns badResults' reasons array
  return badResults.map(function(e){return e.reason});
};
