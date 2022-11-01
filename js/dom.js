const match = new ZenGame()
const btnDeck = document.getElementById("btnDeck")
btnDeck.addEventListener("click", (event) => {
event.preventDefault()
match.renderDeck()
settingUpGame()
})
function settingUpGame() {
    const allBackCards = document.querySelectorAll(".show")
    allBackCards.forEach((backCard) => {
    backCard.addEventListener("click", () => {
        let card = backCard.previousElementSibling
        console.log(card)
    })    
    });
}