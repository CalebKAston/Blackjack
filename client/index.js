var blackjack = angular.module("blackjack", []);

blackjack.controller("blackjackController", ["$scope", "deckBuilder", "totaler", "dealerTurn", function($scope, deckBuilder, totaler, dealerTurn){
  $scope.playerScore = 0;
  $scope.dealerScore = 0;
  $scope.bust = false;
  $scope.dealerBust = false;

  $scope.deck = deckBuilder.shuffle(deckBuilder.deckBuilder(1));

  $scope.dealerCards = [$scope.deck.pop()];
  $scope.hiddenCard = $scope.deck.pop();
  $scope.playerCards = [$scope.deck.pop(), $scope.deck.pop()];

  $scope.playerTotalArray = totaler.totalCalculator([$scope.playerCards])[0];
  $scope.dealerTotalArray = totaler.totalCalculator([$scope.dealerCards])[0];
  $scope.playerTotal = $scope.playerTotalArray.join("/");
  $scope.dealerTotal = $scope.dealerTotalArray.join("/");

  $scope.hit = function(){
    $scope.playerCards.push($scope.deck.pop());
    $scope.playerTotalArray = totaler.totalCalculator([$scope.playerCards])[0];
    $scope.playerTotal = $scope.playerTotalArray.join("/");
    if($scope.playerTotalArray[0] > 21){
      $scope.bust = true;
      $scope.dealerScore++;
      console.log("Dealer wins!");
    }
  };

  $scope.dealerHit = function(){
    console.log("Dealer Hitting...")
    $scope.dealerCards.push($scope.deck.pop());
    $scope.dealerTotalArray = totaler.totalCalculator([$scope.dealerCards])[0];
    $scope.dealerTotal = $scope.dealerTotalArray.join("/");
    if($scope.dealerTotalArray[0] > 21){
      $scope.dealerBust = true;
      $scope.playerScore++;
      console.log("Player wins!")
    }
  };

  $scope.hold = function(){
    $scope.dealerCards.push($scope.hiddenCard);
    $scope.dealerTotalArray = totaler.totalCalculator([$scope.dealerCards])[0];
    $scope.dealerTotal = $scope.dealerTotalArray.join("/");
    dealerTurn.takeTurn($scope);
  };
}]);


/*
- The dealer must hit if his total is below 17
- If the dealer has any high aces (counted as 11) as part of his total, he must hit while his count is below 18.
- If any player has a value greater than their current value, the dealer must continue to hit. E.g. if a player has 20, the dealer must hit until they have 20 or greater.
*/
