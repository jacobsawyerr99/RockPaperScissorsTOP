// this file contains the javascript for our rock paper scissors game.

const outcomes = [
    'rock',
    'paper',
    'scissors'
];

let playerCounter = 0;
let computerCounter = 0;

function computerPlay()
{
    var result = outcomes[~~(Math.random() * outcomes.length)]; //pulls random string from outcomes array. ~~ is faster to use than Math.floor.
                                                                    //~~ does not play well with negative numbers however.
    return result;
}

function playRound(playerSelection, pcSelection)
{
    // tests to ensure output of player and computer are correct
    console.log(playerSelection);
    console.log(pcSelection);

    if (playerSelection == pcSelection)     // tie between player and computer
    {
        console.log("Game is a tie.")
        return "Game is a tie."
    }
    else if(        // player wins
        (playerSelection == "paper" && pcSelection == "rock") ||
        (playerSelection == "rock" && pcSelection == "scissors") ||
        (playerSelection == "scissors" && pcSelection == "paper"))
    {
        playerCounter++;
        console.log("You Win.")
        return "You Win."
    }
    else if(        // computer wins
        (pcSelection == "paper" && playerSelection == "rock") ||
        (pcSelection == "rock" && playerSelection == "scissors") ||
        (pcSelection == "scissors" && playerSelection == "paper"))
    {
        computerCounter++;
        console.log("Computer Wins.")
        return "Computer Wins."
    }
}

function game()
{
    for (let i = 0; i < 5; i++) // loop through 5 games
    {
        var playerSelection = prompt("Choose Rock, Paper, or Scissors").toLowerCase();
        var pcSelection = computerPlay();
        playRound(playerSelection, pcSelection);
    }

    if(playerCounter == 3)  // best of 5. if either player or computer reaches 3, end game. 
    {
        console.log("Player Wins!");
    }
    else if(computerCounter == 3)
    {
        console.log("Computer Wins!");
    }

    console.log(playerCounter);
    console.log(computerCounter);
}

game();