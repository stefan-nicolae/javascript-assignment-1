const winMessage = "You Win!",
loseMessage = "You Lose!",
drawMessage = "It's a draw, try again!",
errorMessage = "Write only rock, scissors or paper, try again!",
quitMessage = "Feel free to try again later by refreshing the page!",
promptMessage = "Play Rock, Paper Scissors with the computer for 5 rounds.\n Please type in Rock, Paper or Scissors"

let roundCounter = 1


function writeConclusion(message) {
    console.log("    " + message)
    console.log('------------------')
}

function computerPlay() {
    let result,
    randomNumber = Math.floor((Math.random() * 3) + 1);

    switch(randomNumber) {
        case 1: 
            result = "Rock"
            break
        case 2: 
            result = "Paper"
            break
        case 3:
            result = "Scissors"
    }
    return result
}


//take user input
function getSelections() {
    let playerSelection = prompt(promptMessage)
    let computerSelection = computerPlay().toLowerCase()

    //cancel
    if(playerSelection === null) {
        return "quit"
    } 

    //empty ok
    if(!playerSelection) {
        writeConclusion(errorMessage)
        return getSelections()
    }

    playerSelection = playerSelection.toLowerCase().replaceAll(" ", "")

    console.log("> You picked " + playerSelection)
    console.log("> Computer picked " + computerSelection)

    if(playerSelection === computerSelection) {
        writeConclusion(drawMessage)
        return getSelections()
    }

    return gameRound(playerSelection, computerSelection)
}

function gameRound(playerSelection, computerSelection) {
    switch(playerSelection) {
        case "rock":
            if(computerSelection === "paper") return loseMessage 
            else return winMessage
        case "scissors":
            if(computerSelection === "paper") return winMessage
            else return loseMessage 
        case "paper":
            if(computerSelection === "scissors") return loseMessage 
            else return winMessage
        default: 
            writeConclusion(errorMessage)
            return getSelections()
    }
}

function game() {
    let playerWinCounter = 0
    for (let i = 0; i < 5; i++) {
        console.log("Round " + roundCounter++)
        const roundResult = getSelections()
        if(roundResult === "quit") return quitMessage
        writeConclusion(roundResult)
        if(roundResult.includes("Win")) playerWinCounter++
    }
    setTimeout(() => {
        console.log(quitMessage)
    }, 100)
    if(playerWinCounter >= 3) return "----YOU WON----"
    else return "----COMPUTER WON----"
}

console.log("WELCOME TO ROCK PAPER SCISSORS GAME!")
console.log('------------------')
console.log(game())

