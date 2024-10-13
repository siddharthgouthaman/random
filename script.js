const rock = `
    _______
---'   ____)
      (_____)
      (_____)
      (____)
---.__(___)
`;

const paper = `
    _______
---'   ____)____
          ______)
          _______)
         _______)
---.__________)
`;

const scissors = `
    _______
---'   ____)____
          ______)
       __________)
      (____)
---.__(___)
`;

function playGame(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = Math.floor(Math.random() * 3);

    document.getElementById('player-choice').innerHTML = `You chose: ${choices[playerChoice]} <pre>${eval(choices[playerChoice])}</pre>`;
    document.getElementById('computer-choice').innerHTML = `Computer chose: ${choices[computerChoice]} <pre>${eval(choices[computerChoice])}</pre>`;

    if (playerChoice === computerChoice) {
        document.getElementById('result').innerHTML = "It's a tie!";
    } else if (
        (playerChoice === 0 && computerChoice === 2) || 
        (playerChoice === 1 && computerChoice === 0) || 
        (playerChoice === 2 && computerChoice === 1)
    ) {
        document.getElementById('result').innerHTML = "You win!";
    } else {
        document.getElementById('result').innerHTML = "You lose!";
    }
}
