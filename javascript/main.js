// * GLOBAL VARIABLES

let splashScreen = document.querySelector("#splash-screen")
let gameOverScreen = document.querySelector("#gameover-screen")
let canvas = document.querySelector("#my-canvas")
let ctx = canvas.getContext("2d")
// let newGame = new Game()
let newGame;


// * STATE MANAGEMENT FUNCTIONS

const startGame = () => {

  // desaparer el splash screen y aparecer canvas
  splashScreen.style.display = "none";
  canvas.style.display = "flex";

  // ejecutar mi juego
  newGame = new Game()
  console.log(newGame)
  newGame.gameLoop()
}



// * ADD EVENT LISTENERS

let startButton = document.querySelector("#start-btn")
startButton.addEventListener("click", startGame)

canvas.addEventListener("click", () => {
  // como hago para invocar la funcion polloJump ???
  newGame.pollo.polloJump()
})