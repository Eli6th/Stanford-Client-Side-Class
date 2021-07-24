var cardOrder;
const allCards = new Array (
    {card: "1Heart", image: "1hearts.png", number: 1, flipped: false, cleared: false, placement: -1},
    {card: "1Club", image: "1clubs.png", number: 1, flipped: false, cleared: false, placement: -1},
    {card: "2Heart", image: "2hearts.png", number: 2, flipped: false, cleared: false, placement: -1},
    {card: "2Club", image: "2clubs.png", number: 2, flipped: false, cleared: false, placement: -1},
    {card: "3Heart", image: "3hearts.png", number: 3, flipped: false, cleared: false, placement: -1},
    {card: "3Club", image: "3clubs.png", number: 3, flipped: false, cleared: false, placement: -1}
);
Object.freeze(allCards);

var numCardsFlipped = 0;
var cardsFlipped = [];

function shuffle() {
    var cardOptions = allCards.slice(0);
    cardOrder = new Array();
    var numCards = 6;

    alert(JSON.stringify(cardOrder));
    alert(JSON.stringify(cardOptions));
    alert(JSON.stringify(allCards));
    
    for (var i = 0; i < numCards; i++) {
        var max = numCards - i;
        var cardIndex = parseInt(Math.random() * (max));
        cardOrder.push(cardOptions[cardIndex]);

        cardOptions.splice(cardIndex, 1);
    }

    for (var i = 0; i < cardOrder.length; i++) {
        cardOrder[i].placement = i;
    }
    reset();
}

function flip(cardId, cardNum) {
    if (numCardsFlipped > 1 || cardOrder[cardNum].cleared)
        return;
    else {
        document.getElementById(cardId).src = "images/" + cardOrder[cardNum].image;
        cardsFlipped.push(cardId, cardNum);
        cardOrder[cardNum].flipped = true;
        numCardsFlipped++;
        if (numCardsFlipped == 2) {
            setTimeout(flipBack, 1500);
        }
    }
}

function flipBack() {
    var card1;
    var card2;
    for (var i = 0; i < cardOrder.length; i++) {
        if (cardOrder[i].flipped == true && card1 != undefined) {
            card2 = cardOrder[i];
            if (card1.number == card2.number) {
                document.getElementById(cardsFlipped[0]).src = "images/clear.png";
                document.getElementById(cardsFlipped[2]).src = "images/clear.png";

                cardOrder[cardsFlipped[1]].cleared = true;
                cardOrder[cardsFlipped[3]].cleared = true;
            } else {
                document.getElementById(cardsFlipped[0]).src = "images/back.png";
                document.getElementById(cardsFlipped[2]).src = "images/back.png";
            }

            cardOrder[cardsFlipped[1]].flipped = false;
            cardOrder[cardsFlipped[3]].flipped = false;
            cardsFlipped = [];
            numCardsFlipped = 0;
        } else if (cardOrder[i].flipped == true) {
            card1 = cardOrder[i];
        }
    }
}

function reset() {
    document.getElementById("card1").src = "images/back.png";
    document.getElementById("card2").src = "images/back.png";
    document.getElementById("card3").src = "images/back.png";
    document.getElementById("card4").src = "images/back.png";
    document.getElementById("card5").src = "images/back.png";
    document.getElementById("card6").src = "images/back.png";

    cardsFlipped = [];
}