var blackjack = angular.module("blackjack", []);

blackjack.controller("blackjackController", ["$scope", "deckBuilder", "totaler", function($scope, deckBuilder, totaler){
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
    }
  };

  $scope.dealerHit = function(){
    $scope.dealerCards.push($scope.deck.pop());
    $scope.dealerTotalArray = totaler.totalCalculator([$scope.dealerCards])[0];
    $scope.dealerTotal = $scope.dealerTotalArray.join("/");
    if($scope.dealerTotalArray[0] > 21){
      $scope.dealerBust = true;
      $scope.playerScore++;
    }
  };

  $scope.hold = function(){
    var dealerHasAces = false;
    $scope.dealerCards.push($scope.hiddenCard);
    $scope.dealerTotalArray = totaler.totalCalculator([$scope.dealerCards])[0];
    $scope.dealerTotal = $scope.dealerTotalArray.join("/");
    for(var scoreIndex = 0; scoreIndex < $scope.dealerTotalArray.length; scoreIndex++){
      if($scope.dealerTotalArray[scoreIndex].name === "Ace"){
        dealerHasAces = true;
      }
    }
    if($scope.dealerTotalArray[0] < 17 || $scope.dealerTotalArray[0] < 18 && dealerHasAces || $scope.dealerTotalArray[0] < $scope.playerTotalArray[0]){
      $scope.dealerHit();
    }
  };
}]);


/*
- The dealer must hit if his total is below 17
- If the dealer has any high aces (counted as 11) as part of his total, he must hit while his count is below 18.
- If any player has a value greater than their current value, the dealer must continue to hit. E.g. if a player has 20, the dealer must hit until they have 20 or greater.
*/
