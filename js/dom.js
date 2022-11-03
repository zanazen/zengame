const match = new ZenGame()
const CartaSelecionada = document.getElementById("CartaSelecionada")
const mensag = document.getElementById("mensag")
//const btnDeck = document.getElementById("btnDeck")
const carta = document.querySelector(".deck-carta")
// evento do click
carta.addEventListener("click", () => {
    let cartas = match.renderDeck()
    console.log(cartas)
    CartaSelecionada.src = cartas[0]
    mensag.innerText = match.mensagem(cartas[0])
})