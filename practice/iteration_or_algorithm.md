````javascript

function rockPaperScissors(input) {
  const random = Math.floor(Math.random() * 100); //randomly select a number and multiply by 100
  let opponentChoice;
  let outcome;

  for (let i = 0; i <= random; i++) { //if number is divisible by 3, its rock, if its even its paper, if not sicssors (for loop, iteration, to keep playing the game more than once)
    if (i % 3 == 0) {
      opponentChoice = "rock";
    } else if (i % 2 == 0) {
      opponentChoice = "paper";
    } else {
      opponentChoice = "scissors";
    }
  }

  if (opponentChoice == "rock") { //determines if you win (if statement, selection)
    if (input == 1) {
      outcome = "win";
    } else if (input == 2) {
      outcome = "lose";
    } else {
      outcome = "draw";
    }
  } else if (opponentChoice == "paper") {
    if (input == 2) {
      outcome = "win";
    } else if (input == 0) {
      outcome = "lose";
    } else {
      outcome = "draw";
    }
  } else {
    if (input == 0) {
      outcome = "win";
    } else if (input == 1) {
      outcome = "lose";
    } else {
      outcome = "draw";
    }
  }
  history.push(outcome);

  DOMSelectors.history.innerHTML = "";
  DOMSelectors.content.insertAdjacentHTML(
    "afterbegin",
    `<div class="card" id="${outcome}">
    <p>Your choice: ${returnInput(input).toUpperCase()}</p>
    <p>Opponent choice: ${opponentChoice.toUpperCase()}</p>
    <h4>${outcome.toUpperCase()}</h4>
    </div>
    `
  );
}
//algorithm name: rockPaperScissors
//The algorithm contains selection (if statement) and iteration (for loop)
//its purpose is to randomly generate weither people get rock, paper, or scissors to find out who wins

```iteration
````
