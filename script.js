// this file contains the javascript for our rock paper scissors game.

const outcomes = [
    'rock',
    'paper',
    'scissors'
];

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
        
    }
    else if(        // player wins
        (playerSelection == "paper" && pcSelection == "rock") ||
        (playerSelection == "rock" && pcSelection == "scissors") ||
        (playerSelection == "scissors" && pcSelection == "paper"))
    {

    }
    else if(        // computer wins
        (pcSelection == "paper" && playerSelection == "rock") ||
        (pcSelection == "rock" && playerSelection == "scissors") ||
        (pcSelection == "scissors" && playerSelection == "paper"))
    {

    }
}

var playerSelection = prompt("Choose Rock, Paper, or Scissors").toLowerCase();
var pcSelection = computerPlay();
playRound(playerSelection, pcSelection);

