blackjack.service("dealerTurn", function(){
  this.takeTurn = function($scope){
    console.log("Dealer taking turn...");
    if($scope.dealerHighestTotal < $scope.playerHighestTotal){
      console.log("Dealer highest total less than player");
      $scope.dealerHit();
      if(!$scope.dealerBust){
        this.takeTurn($scope);
      }
    } else if($scope.dealerTotalArray[1] < 18){
      console.log("Dealer has aces and less than 18 and dealer has the same as or more than player");
      $scope.dealerHit();
      if(!$scope.dealerBust){
        this.takeTurn($scope);
      }
    } else if($scope.dealerHighestTotal < 17){
      console.log("Dealer total less than 17, has no aces, and has the same as or more than player");
      $scope.dealerHit();
      if(!$scope.dealerBust){
        this.takeTurn($scope);
      }
    }
    if(!$scope.dealerBust && $scope.dealerHighestTotal > $scope.playerHighestTotal){
      console.log("Dealer wins!");
      if($scope.dealerHighestTotal === 21 && $scope.dealerCards.length === 2){
        $scope.dealerScore += 2;
      } else {
        $scope.dealerScore++;
      }
    } else if(!$scope.dealerBust && $scope.dealerHighestTotal === $scope.playerHighestTotal){
      console.log("It is a tie!");
      if($scope.dealerHighestTotal === 21 && $scope.dealerCards.length === 2 && $scope.playerHighestTotal === 21 && $scope.playerCards.length === 2){
        $scope.dealerScore++;
        $scope.playerScore++;
      }
    }
  }
})