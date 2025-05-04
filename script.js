let humanScore = 0
let computerScore = 0

const btnRock = document.querySelector("#btn-rock")
const btnPaper = document.querySelector("#btn-paper")
const btnScissors = document.querySelector("#btn-scissors")

function playRound(humanChoice){
    const computerChoice = getComputerChoice()

    if (computerChoice === "scissors" && humanChoice === "rock") {
        humanScore += 1
        console.log("human wins", `Human score: ${ humanScore}`, `Computer score ${ computerScore}`)
    } else if (computerChoice === "rock" && humanChoice === "scissors") {
        computerScore += 1
        console.log("computer wins", `Human score: ${ humanScore}`, `Computer score ${ computerScore}`)
    } else if (computerChoice === "paper" && humanChoice === "scissors") {
        humanScore += 1
        console.log("human wins", `Human score: ${ humanScore}`, `Computer score ${ computerScore}`)
    } else if (computerChoice === "paper" && humanChoice === "rock") {
        computerScore += 1
        console.log("computer wins", `Human score: ${ humanScore}`, `Computer score ${ computerScore}`)
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
        computerScore += 1
        console.log("computer wins", `Human score: ${ humanScore}`, `Computer score ${ computerScore}`)
    } else if  (computerChoice === "rock" && humanChoice === "paper") {
        humanScore += 1
        console.log("human wins", `Human score: ${ humanScore}`, `Computer score ${ computerScore}`)
    } else if (computerChoice == humanChoice) {
        console.log("draw", `Human score: ${ humanScore}`, `Computer score ${ computerScore}`)
    }
}
playRound()



if (humanScore === 5) {
    console.log("human won")
} else if (computerScore === 5) {
    console.log("computer won")
}

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

function getHumanChoice(choice) {
    playRound(choice);
  }


const scissorsButton = document.querySelector("#btn-scissors")
scissorsButton.addEventListener("click", (e) => {
    console.log(e.target);
    getHumanChoice("scissors");
})

const paperButton = document.querySelector("#btn-paper")
paperButton.addEventListener("click", (e) => {
    console.log(e.target);
    getHumanChoice("paper");
})

const rockButton = document.querySelector("#btn-rock")
rockButton.addEventListener("click", (e) => {
    console.log(e.target);
    getHumanChoice("rock");
})