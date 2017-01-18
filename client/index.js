var blackjack = angular.module("blackjack", []);

blackjack.controller("blackjackController", ["$scope", "deckBuilder", "totaler", function($scope, deckBuilder, totaler){
  $scope.playerScore = 0;
  $scope.dealerScore = 0;
  $scope.bust = false;

  $scope.deck = deckBuilder.shuffle(deckBuilder.deckBuilder(1));

  $scope.dealerCards = [$scope.deck.pop()];
  $scope.hiddenCard = [$scope.deck.pop()];
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
    }
  };
  $scope.hold = function(){
    console.log("Hold");
  };
}]);

