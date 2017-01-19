blackjack.service("totaler", function(){

  this.totalCalculator = function(cardArrays){ // [[8,A,5]]
    var totals = [];

    for(var cardArray = 0; cardArray < cardArrays.length; cardArray++){
      var player = cardArrays[cardArray];
      var playerTotals = [0];

      for(var card = 0; card < player.length; card++){

        if(player[card].name !== "Ace"){
          for(var totalIndex = 0; totalIndex < playerTotals.length; totalIndex++){
            playerTotals[totalIndex] += player[card].value;
          }
          if(playerTotals[1] > 21){
            playerTotals = [playerTotals[0]];
          }

        } else {
          for(var totalIndex = playerTotals.length - 1; totalIndex >= 0; totalIndex--){
            if(playerTotals.indexOf(playerTotals[totalIndex] + 10) === -1 && playerTotals[totalIndex] + 10 < 21){
              playerTotals.push(playerTotals[totalIndex] + 10);
            }
          }
          for(var index = 0; index < playerTotals.length; index++){
            playerTotals[index] += 1;
          }
          if(playerTotals[1] > 21){
            playerTotals = [playerTotals[0]];
          }
        }

      }
      totals.push(playerTotals);
    }
    return totals;
  };

});