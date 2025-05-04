let humanScore = 0
let computerScore = 0

const btnRock = document.querySelector("#btn-rock")
const btnPaper = document.querySelector("#btn-paper")
const btnScissors = document.querySelector("#btn-scissors")

const humanScoreEl = document.querySelector("#human-score")
const computerScoreEl = document.querySelector("#computer-score")

function playRound(humanChoice){
    const computerChoice = getComputerChoice()

    if (computerChoice === "scissors" && humanChoice === "rock") {
        humanScore += 1
        humanScoreEl.innerText =`Human score ${humanScore}`
    } else if (computerChoice === "rock" && humanChoice === "scissors") {
        computerScore += 1
        computerScoreEl.innerText =`Computer score ${computerScore}`
    } else if (computerChoice === "paper" && humanChoice === "scissors") {
        humanScore += 1
        humanScoreEl.innerText =`Human score ${humanScore}`
    } else if (computerChoice === "paper" && humanChoice === "rock") {
        computerScore += 1
        computerScoreEl.innerText =`Computer score ${computerScore}`
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
        computerScore += 1
         computerScoreEl.innerText =`Computer score ${computerScore}`
    } else if  (computerChoice === "rock" && humanChoice === "paper") {
        humanScore += 1
        humanScoreEl.innerText =`Human score ${humanScore}`
    } else if (computerChoice == humanChoice) {
        console.log("draw", `Human score: ${ humanScore}`, `Computer score ${ computerScore}`)
    }

    if (humanScore === 5) {
        humanScore = 0
        computerScore = 0
        humanScoreEl.innerText =`Human score ${humanScore}`
        computerScoreEl.innerText =`Computer score ${computerScore}`
        winner.innerText =`Human won`
    } else if (computerScore === 5) {
        humanScore = 0
        computerScore = 0
        humanScoreEl.innerText =`Human score ${humanScore}`
        computerScoreEl.innerText =`Computer score ${computerScore}`
        winner.innerText =`Computer won`
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

const winner = document.querySelector(".winner")


//function updateScore(){

//}