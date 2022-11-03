class ZenGame{
   constructor(){
        this.deck = [
            "./img/buda.jpeg",
            "./img/lakshmi.jpeg",
            "./img/ganesha.jpeg"
        ];
    }
    renderDeck(){
    let sortDeck = this.deck.sort(() => {
        return Math.random() - 0.5
    })
   //console.log(sortDeck)
//    sortDeck.forEach((img) => {
//         let image1 = document.createElement("img")
//         image1.scr = "./img/buda.jpeg"
//         image1.classList.add("show")
//         //
//         let image2 = document.createElement("img")
//         image2.scr = "./img/lakshmi.jpeg"
//         image2.classList.add("show")
//         //
//         let image3 = document.createElement("img")
//         image3.scr = "./img/ganesha.jpeg"
//         image3.classList.add("show")
//         //     
//     })
    return sortDeck;
    }
mensagem (ultdeck) {
    if (ultdeck === "./img/buda.jpeg") {
        return "Buda lhe diz: Começar aos poucos é normal: Buda ensinou que tudo começa devagar e que não é preciso ter pressa. Assim como uma jarra é preenchida aos poucos com água, a sabedoria humana também é alcançada aos poucos."
    }
    if (ultdeck === "./img/ganesha.jpeg") {
        return "Ganesha lhe diz: Não percam a fé na sua capacidade de encontrar a solução para os seus problemas, de resolvê-los com maestria, nos seus discernimentos para decidirem o que abandonar e o que levar nessa nova jornada em busca de si mesmos e de sua filiação Divina."
    }
    if (ultdeck === "./img/lakshmi.jpeg") {
        return "Lakshmi lhe diz: Lakshmi, Deusa da Fortuna e Abundância, receba dela Saúde, Força, Abundância e Prosperidade para a sua vida."
    }
}
}