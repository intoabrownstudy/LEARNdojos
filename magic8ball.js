// Returns true if the user wants to stop the game
function didUserEnterStop(userInput) {
  return userInput.toLowerCase() === "stop";
}
​
function askSingleQuestion() {
  // As a user I can enter a question on a web page and magically get an answer to my question.
​
  //Create an array with the following answers: Yup!, Fuhgeddaboudit, Maybe, Ask: what would your mother do?, Ask: what would an Australian do, then do the opposite, Your answer here.
​
  var answers = ["Yup!", "Fuhgeddaboudit", "Maybe", "Ask: what would your mother do?", "Ask: what would an Australian do, then do the opposite", "Your answer here"];
​
  //Input a question from the user.
​
  var question = prompt("Your question:");
​
  // If question is not "stop" give an answer
  if (!didUserEnterStop(question)) {
  //Create a random number to select one of the answers (hint: use Math.random() and change the magnitude).
​
    var randomIndex = Math.floor(Math.random()*answers.length);
​
    //Output the question with the random answer.
​
    var fullAnswer = question + " Your answer: " + answers[randomIndex];
    alert(fullAnswer);
  }
  return question;
};
​
function playGame() {
  do {
  } while (!didUserEnterStop(askSingleQuestion()));
};
