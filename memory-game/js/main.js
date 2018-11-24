var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamons.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];

var cardsInPlay = [];

var checkForMatch = function(){ 
if (cardsInPlay[0] === cardsInPlay[1]) {
console.log("You found a match!");
} else {
console.log("Sorry, try again.");
}
};

var flipCard = function(cardId){
if(cardsInPlay.length === 2){
	alert("You found a match!");
} else if (cardsInPlay[0] === cardsInPlay[1]) {
    alert ("You found a match!");
} else {
	alert ("Sorry, try again");
}

console.log("User flipped" + cards[cardId].rank);
cardsInPlay.push(cards[cardId].rank);

console.log(cards[cardId].cardImage);
console.log(cards[cardId].suit);

checkForMatch();
};

flipCard(0);
flipCard(2);