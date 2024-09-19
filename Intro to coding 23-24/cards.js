let cl = console.log;

//creates an array of all 52 cards.
let buildDeck = function () {
  let deck = [];
  for (let i = 2; i <= 14; i++) {
    deck.push(createCard(i, "Clubs"));
    deck.push(createCard(i, "Hearts"));
    deck.push(createCard(i, "Diamonds"));
    deck.push(createCard(i, "Spades"));
  }
  return deck;
};

//Builds a single card based on its rank.
let createCard = function (rank, suit) {
  let card = {
    rank: rank,
    suit: suit,
    color: getColor(suit),
    name: getName(rank),
  };
  return card;
};

//Gets the card's name based on its rank.
let getName = function (rank) {
  switch (rank) {
    case 11:
      return "Jack";
      break;
    case 12:
      return "Queen";
      break;
    case 13:
      return "King";
      break;
    case 14:
      return "Ace";
      break;
    default:
      return rank + "";
  }
};

//Gets the card's function based on it's suits.
let getColor = function (suit) {
  let color;
  if (suit === "Clubs" || suit === "Spades") {
    color = "black";
  } else if (suit === "Diamonds" || suit === "Hearts") {
    color = "red";
  }
  return color;
};

let deck = buildDeck();

let dealCard = function (deck) {
  let randomNum = Math.floor(Math.random() * deck.length);
  let card = deck.splice(randomNum, 1)[0];
  return card;
};

let dealHand = function (deck) {
  return [
    dealCard(deck),
    dealCard(deck),
    dealCard(deck),
    dealCard(deck),
    dealCard(deck),
    dealCard(deck),
    dealCard(deck),
    dealCard(deck),
    dealCard(deck),
    dealCard(deck),
    dealCard(deck),
    dealCard(deck),
    dealCard(deck),
    dealCard(deck),
    dealCard(deck),
    dealCard(deck),
    dealCard(deck),
    dealCard(deck),
    dealCard(deck),
    dealCard(deck),
    dealCard(deck),
    dealCard(deck),
    dealCard(deck),
    dealCard(deck),
    dealCard(deck),
    dealCard(deck),
  ];
};

let player1 = {
  name: "player1",
  hand: dealHand(deck),
};

let player2 = {
  name: "player2",
  hand: dealHand(deck),
};

// let sortHand = function (hand) {
//   for (let i = 2; i < 14; i++) {
//     for (let a = 0; a < hand.length; a++) {
//       let sort = 0;
//       let value = hand[a].rank;
//       if (value == i) {
//         extraCard = hand[a + 1];
//         hand[hand.length - 1] = extraCard;
//         hand[sort] = hand[a];
//         sort++;
//         return hand;
//       }
//     }
//   }
// };

let sortRank = function (hand) {
  return hand.sort(function (a, b) {
    return a.rank - b.rank;
  });
};
sortRank(player1.hand);
sortRank(player2.hand);

// console.log(player1);
// console.log(player2);
let removeCards = function (player) {
  hand = player.hand;
  for (let a = 2; a <= 14; a++) {
    for (let i = 0; i < hand.length; i++) {
      if (hand[i].rank == a) {
        hand.shift(i);
        i--;
        // passTurn();
        break;
        // console.log(player);
      }
    }
  }
};
// let passTurn = function () {
//   let whoseTurn = 1;
//   if (whoseTurn === 1) {
//     whoseTurn = 2;
//   } else if (whoseTurn === 2) {
//     whoseTurn = 1;
//   }
//   return whoseTurn;
// };

// let TakeTurn = function (turn) {
//   do {
//     removeCards(getPlayer(passTurn()));
//     console.log(getPlayer(passTurn()) + getPlayer(passTurn()));
//   } while (player1.hand.length > 0 && player2.hand.length > 0);
// };
// let getPlayer = function (turn) {
//   if (turn == 1) {
//     return player1;
//   } else if (turn == 2) {
//     return player2;
//   }
// };
console.log(player1);
console.log(player2);
removeCards(player1);
removeCards(player2);
console.log(player1);
console.log(player2);
// TakeTurn(passTurn(2));
