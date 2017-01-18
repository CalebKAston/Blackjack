blackjack.service("deckBuilder", function(){

  this.Card = function(value, name, suit){
    this.value = value;
    this.name = name;
    this.suit = suit;
  }

  this.deckBuilder = function(numberOfDecks){
    this.names = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];
    this.suits = ["Hearts","Diamonds","Spades","Clubs"];
    this.values = {
      "2": 2,
      "3": 3,
      "4": 4,
      "5": 5,
      "6": 6,
      "7": 7,
      "8": 8,
      "9": 9,
      "10": 10,
      "Jack": 10,
      "Queen": 10,
      "King": 10,
      "Ace": [1, 11]
    };
    var cards = [];

    for(var deckIndex = 0; deckIndex < numberOfDecks; deckIndex++){
      for(var suitIndex = 0; suitIndex < this.suits.length; suitIndex++){
        for(var nameIndex = 0; nameIndex < this.names.length; nameIndex++){
          cards.push(new this.Card(this.values[this.names[nameIndex]], this.names[nameIndex], this.suits[suitIndex]));
        }
      }
    }

    return cards;
  }

  this.shuffle = function(deck){
    for(var index = 0; index < deck.length; index++){
      var randomIndex = Math.floor(Math.random() * deck.length);
      var temporary = deck[index];
      deck[index] = deck[randomIndex];
      deck[randomIndex] = temporary;
    }
    return deck;
  }

});