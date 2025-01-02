class Game {
    constructor() {
        this.missed = 0
        this.phrases = [
            new Phrase("hello"),
            new Phrase("happy"),
            new Phrase("smile"),
            new Phrase("good day"),
            new Phrase("Coding"),
        ]
        this.activePhrase = null
    }

    getRandomPhrase() {
        const randomIndex = Math.floor(Math.random() * this.phrases.length)
        return this.phrases[randomIndex]
    }

    startGame() {
        this.toggleButtons(true)
        this.activePhrase = this.getRandomPhrase()
        this.activePhrase.addPhraseToDisplay()
        const overlay = document.querySelector("#overlay").style.display = "none"
    }

    handleInteraction(clickedButton) {
        clickedButton.disabled = true
        if (this.activePhrase.checkLetter(clickedButton.textContent)) {
            clickedButton.classList.add("chosen")
            this.activePhrase.showMatchedLetter(clickedButton.textContent)
            this.checkForWin() && this.gameOver(true)

        } else {
            clickedButton.classList.add("wrong")
            this.removeLife()
        }
    }

    checkForWin() {
        const unrevealedLetters = document.querySelectorAll("#phrase .hide")
        return unrevealedLetters.length == 0
        this.setButtons(false)
    }

    removeLife() {
        const lives = document.querySelectorAll("[src*='live']")
        lives[lives.length - 1].setAttribute("src", "images/lostHeart.png")
        this.missed++
        this.missed === 5 && this.gameOver()
    }


    gameOver(win = false) {
        const overlay = document.querySelector("#overlay")
        overlay.className = win ? "win" : "lose"
        overlay.querySelector("h1").textContent = win ? "Congrats, you won! 🎉" : "You lost 😢 Try again!"
        overlay.style.display = ""

        this.toggleButtons(false)
        this.resetGame()
    }

    resetGame() {
        const phraseUl = document.querySelector('#phrase ul');
        ul.innerHTML = ""
        const lifeImages = document.querySelectorAll(".tries img")
        lifeImages.forEach(lifeImage => lifeImage.src = ("images/liveHeart.png"))

        this.missed = 0
    }

    toggleButtons(bool) {
        document.querySelectorAll("#qwerty button").forEach(key => {
            key.disabled = !bool
            key.className = "key"
        })
    }
}