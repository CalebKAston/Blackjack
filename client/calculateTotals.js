blackjack.service("totaler", function(){

  this.totalCalculator = function(cardArrays){
    var totals = [];
    for(var cardArray = 0, cardArray < cardArrays.length; cardArray++){
      var player = cardArrays[cardArray];
      var playerTotals = [0];
      for(var card = 0; card < player.length; card++){
        if(card.name !== "Ace"){
          for(var totalIndex = 0; totalIndex < playerTotals.length; totalIndex++){
            playerTotals[totalIndex] += card.value;
          }
        } else {
          for(var totalIndex = 0; totalIndex < playerTotals.length; totalIndex++){
            playerTotals.push(playerTotals[totalIndex] + 10);
          }
          for(var index = 0; index < playerTotals.length; index++){
            playerTotals[index] += 1;
          }
        }
      }
      totals.push(playerTotals);
    }
    return totals;
  }

})