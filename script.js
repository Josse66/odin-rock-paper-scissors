//función que nos da un número random en un rango (investigada)
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

//1 será rock, 2 será paper y 3 será scissors
//función que le asigna una opción a la computadora
function getComputerChoice() {
    //obteniendo un número aleatorio entre 1 y 3
    const randomNumber = getRandomNumber(1, 3)

    //definiendo qué opción tocó
    if (randomNumber === 1) {
        return 'rock' //si es 1 es rock
    } else if (randomNumber === 2) {
        return 'paper' // si es 2 es paper
    }
    return 'scissors' // si no es 1 ni 2 entonces es scissors
}

//función que le pide su elección al jugador y la retorna
function getHumanChoice() {
    //usando prompt para solicitar la elección
    const humanChoice = prompt('¿Rock, paper or scissors?')
    //retornando la elección
    return humanChoice
}

//declaramos la función que crea el juego
function playGame() {
    //declarando los marcadores humano y computadora inicializados en 0
    let humanScore = 0
    let computerScore = 0

    //función que genera una ronda
    function playRound(humanChoice, computerChoice) {
        //recibiendo la elección del jugador y convirtiendo a minúsculas
        const lowerHumanChoice = humanChoice.toLowerCase()

        //si las dos elecciones son iguales draw
        if (lowerHumanChoice === computerChoice) {
            console.log(`It's a draw`)
        } else if ((lowerHumanChoice === 'rock' && computerChoice === 'scissors') || (lowerHumanChoice === 'paper' && computerChoice === 'rock') || (lowerHumanChoice === 'scissors' && computerChoice === 'paper')) {
            humanScore += 1 //opciones cuando gana el jugador
            console.log(`You win, ${lowerHumanChoice} beats ${computerChoice}`)
        } else {
            computerScore += 1 //si no ganó el jugador, gana la computadora
            console.log(`You lose, ${computerChoice} beats ${lowerHumanChoice}`)
        }
    }

    //corriendo el juego 5 veces
    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice())
        //mostramos el score
        console.log('================== SCORE ==================')
        console.log(`YOU: ${humanScore} | COMPUTER: ${computerScore}`)
    }

    //declarando ganador
    if (humanScore === computerScore) {
        console.log('DRAW GG') // si es un empate
    } else if (humanScore > computerScore) {
        console.log('HUMAN IS A WINNER!! THE END OF THE COMPUTERS') // si el humano gana
    } else {
        console.log('COMPUTER IS THE WINNER!! THE END OF THE HUMANS') //si no gana el humano gana la computadora
    }
}

//ejecutando el juego
playGame()