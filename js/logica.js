class ZenGame{
    constructor(){
        this.deck = [
            "./img/buda.jpeg",
            "./img/lakshimi.jpeg",
            "./img/ganesha.jpeg"
        ];
    }
        renderDeck(){
        let sortDeck = this.deck.sort(() => {
            return Math.random() - 0.5
        })
        let boardGame = document.getElementById("board")
        console.log(boardGame)
    }
}