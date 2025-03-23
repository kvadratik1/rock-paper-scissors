let humanScore = 0
let computerScore = 0

function playRound(){
    const computerChoice = getComputerChoice()
    const humanChoice = getHumanChoice()

    if (computerChoice === "scissors" && humanChoice === "rock") {
        humanScore += 1
        console.log("human wins", `Human score: ${ humanScore}`, `Computer score ${ computerScore}`)
    } 
}
playRound()

function getComputerChoice(){
    const randomNumber = getRandomInt(3)
    let choice = ""

    if (randomNumber === 0){
        choice = "scissors"
    } else if (randomNumber === 1){
        choice = "paper"
    } else if (randomNumber === 2){
        choice = "rock"
    }

    return choice
   
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getHumanChoice(){
    const message = "choose rock, paper,scissors"
    let choice = prompt(message)
    return choice
}
