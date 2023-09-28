let game = new Game()
const startButton = document.querySelector("#btn__reset")
const initializeGame = () => {
    game = new Game()
    game.startGame()
}
startButton.addEventListener("click", initializeGame)

const qu = document.querySelector("#qwerty")
qu.addEventListener("click", (e) => {
    if (e.target.tagName == "BUTTON") {
        game.handleInteraction(e.target)
    }
})


document.addEventListener("keyup", (e) => {
    const buttons = document.querySelectorAll(".key")
    const button = Array.from(buttons).find(button => button.textContent === e.key.toLowerCase())
    if (button && !button.disabled) {
        game.handleInteraction(button)
    }
})