var blackjack = angular.module("blackjack", []);

blackjack.controller("blackjackController", ["$scope", "deckBuilder", "totaler", function($scope, deckBuilder, totaler){
  $scope.playerScore = 0;
  $scope.dealerScore = 0;

  $scope.deck = deckBuilder.shuffle(deckBuilder.deckBuilder(1));

  $scope.dealerCards = [$scope.deck.pop()];
  $scope.hiddenCard = [$scope.deck.pop()];
  $scope.playerCards = [$scope.deck.pop(), $scope.deck.pop()];

  $scope.playerTotal = totaler.totalCalculator([$scope.playerCards])[0].join("/");
  $scope.dealerTotal = totaler.totalCalculator([$scope.dealerCards])[0].join("/");

  $scope.hit = function(){
    $scope.playerCards.push($scope.deck.pop());
    $scope.playerTotal = totaler.totalCalculator([$scope.playerCards])[0].join("/");
  };
  $scope.hold = function(){
    console.log("Hold");
  };
}]);

