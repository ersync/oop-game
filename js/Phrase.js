const ul = document.querySelector("#phrase ul")

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase()
    }

    addPhraseToDisplay() {
        const phraseLength = this.phrase.length
        for (let letter of this.phrase) {
            const li = document.createElement("li")
            console.log(letter)
            letter !== " " ? li.classList.add("hide", "letter", letter) : li.classList.add("space")
            li.textContent = letter
            ul.insertAdjacentElement("beforeend", li)
        }

    }

    checkLetter(letter) {
        return this.phrase.includes(letter)
    }

    showMatchedLetter(letter) {
        document.querySelectorAll(`.${letter}`).forEach(letter => letter.classList.replace("hide", "show"))
    }
}

