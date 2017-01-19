blackjack.service("dealerTurn", function(){
  this.takeTurn = function($scope){
    var dealerHasAces = false;
    for(var cardIndex = 0; cardIndex < $scope.dealerCards.length; cardIndex++){
      if($scope.dealerCards[cardIndex].name === "Ace"){
        dealerHasAces = true;
      }
    }
    console.log("Dealer taking turn...");
    if($scope.dealerTotalArray[0] < $scope.playerTotalArray[0]){
      console.log("Dealer total less than player");
      $scope.dealerHit();
    } else if(dealerHasAces && $scope.dealerTotalArray[1] < 18){
      console.log("Dealer has aces and less than 18");
      $scope.dealerHit();
    } else if($scope.dealerTotalArray[0] < 17){
      console.log("Dealer total less than 17");
      $scope.dealerHit();
    }
    if(!$scope.dealerBust && $scope.dealerTotalArray[0] < $scope.playerTotalArray[0]){
      this.takeTurn($scope);
    } else if(!$scope.dealerBust && $scope.dealerTotalArray[0] > $scope.playerTotalArray[0]){
      console.log("Dealer wins!");
    } else if(!$scope.dealerBust && $scope.dealerTotalArray[0] === $scope.playerTotalArray[0]){
      console.log("It is a tie!");
    }
  }
})