//funcion que nos da un numero random entre 1 y 3(investigada)
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

//1 será rock, 2 será paper y 3 será scissors
//funcion que le asigna una opcion a la computadora
function getComputerChoice(){
    //obteniendo un numero aleatorio entre 1 y 3
    const randomNumber = getRandomNumber(1,3)

    //definiendo que opcion tocó
    if(randomNumber === 1){
        return 'rock' //si es 1 es rock
    } else if (randomNumber === 2){
       return 'paper' // si es 2 es paper
    }
    return 'scissors' // si no es 1 ni 2 entonces es scissors
}

//declaramos la funcion que crea el juego
function playGame(){
    //declarando los marcadores humano y computadora inicializados en 0
    let humanScore = 0
    let computerScore = 0
}