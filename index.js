document.addEventListener("DOMContentLoaded", pageLoaded);
    const score = {
        wins: 0,
        losses: 0,
        ties: 0
    };

    function pageLoaded(){
        // a function that will generate the computer choice
        function computerSelect() {
            let num = Math.random();
            if (num < 1/3) {
                return "scissors";
            } else if (num < 2/3) {
                return "paper";
            } else {
                return "rock";
            }
        }

        // a function that will compare the result of the user with that of the computer
        function decideWinner(computerChoice, userChoice) {
            if (
                (computerChoice === "scissors" && userChoice === "rock") ||
                (computerChoice === "paper" && userChoice === "scissors") ||
                (computerChoice === "rock" && userChoice === "paper")
            ) { 
                score.wins++;
                return `You won! The computer chose ${computerChoice}.`;
            } 
            else if (
                (userChoice === "scissors" && computerChoice === "rock") ||
                (userChoice === "paper" && computerChoice === "scissors") ||
                (userChoice === "rock" && computerChoice === "paper")
            ) {
                score.losses++;
                return `You lost! The computer chose ${computerChoice}.`;
            } 
            else {
                score.ties++;
                return `It's a draw! The computer chose ${computerChoice}.`;
            }
        }


        document.querySelectorAll("button").forEach(button => {
            button.onclick = function(){
                let computerChoice = computerSelect();
                let userChoice = button.dataset.userinput;
                if (userChoice === "resetScore"){
                    score.losses = 0;
                    score.ties = 0;
                    score.wins = 0;
                } else{
                    console.log(`User choice: ${userChoice}`);
                    let result = decideWinner(computerChoice, userChoice);
                    console.log(result);
                    console.log(score)
                }
            }
        })
}