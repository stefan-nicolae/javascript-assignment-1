function writeConclusion(message) {
    console.log("    " + message)
    console.log('  ------------------')
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

function gameRound() {
    let playerSelection, 
    computerSelection
    
    const winMessage = "You Win!",
    loseMessage = "You Lose!",
    drawMessage = "It's a draw, try again!",
    errorMessage = "Write only rock, scissors or paper, try again!"

    computerSelection = computerPlay().toLowerCase()
    playerSelection = prompt("Write Rock, Paper or Scissors")
    if(!playerSelection) {
        return gameRound()
    }
    playerSelection.toLowerCase().replaceAll(" ", "")
    
    console.log("You picked " + playerSelection)
    console.log("Computer picked " + computerSelection)

    if(playerSelection === computerSelection) {
        writeConclusion(drawMessage)
        return gameRound()
    }

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
            return gameRound()
    }
}

function game() {
    let playerWinCounter = 0
    for (let i = 0; i < 5; i++) {
        const roundResult = gameRound()
        writeConclusion(roundResult)
        if(roundResult.includes("Win")) playerWinCounter++
    }
    if(playerWinCounter >= 3) return "----YOU WON----"
    else return "----COMPUTER WON----"
}

while(true) {
    console.log("WELCOME TO ROCK PAPER SCISSORS GAME!")
    console.log('  ------------------')
    console.log(game())
}