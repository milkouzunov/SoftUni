function deckOfCards(arrayOfCards) {
    let cardColection = [];
    function playingCards(face, suit) {
        let obj = {
            face,
            suit,
            "validFaces": ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'],
            "validSuit": ['S', 'H', 'D', 'C'],

            toString() {
                if (this.validFaces.includes(face) && this.validSuit.includes(suit)) {
                    let unicode = {
                        "S": "\u2660 ",
                        "H": "\u2665",
                        "D": "\u2666 ",
                        "C": "\u2663 ",
                    }
                    return `${face}${unicode[suit]}`;
                }

                return "Invalid card: " + face + suit;
            }
        }

        return obj.toString()
    }

    for (const cardsData of arrayOfCards) {
        if (cardsData.includes("10")) {
            face = cardsData[0] + cardsData[1];
            suit = cardsData[2]
        } else {
            face = cardsData[0];
            suit = cardsData[1]
        }

        let result = playingCards(face, suit)

        if (result.includes("Invalid card:")) {
            console.log(result);
            return;
        }
        cardColection.push(result);
    }

    console.log(cardColection.join(' '))
}

module.exports = deckOfCards

deckOfCards(['5S', '3D', 'QD', '1C'])