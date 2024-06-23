let arr = []
let hasBlackJack = false
let isAlive = false

let sum = 0
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function getRandomCard() {

    let rando = Math.floor(Math.random() * 13) + 1
    if (rando === 1) {
        return 11
    }
    else if (rando >= 11 && rando <= 13) {
        return 10
    }
    else {
        return rando
    }
}


function startGame() {

    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    arr = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}


function renderGame() {


    cardsEl.textContent = "Cards: "
    for (let i = 0; i < arr.length; i++) {
        cardsEl.textContent += arr[i] + " "

    }
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}


function newCard() {

    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        arr.push(card)
        renderGame()
    }
}
