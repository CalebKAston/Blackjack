var blackjack = angular.module("blackjack", []);

blackjack.controller("blackjackController", ["$scope", "deckBuilder", function($scope, deckBuilder){
  $scope.playerScore = 0;
  $scope.dealerScore = 0;
  $scope.deck = deckBuilder.shuffle(deckBuilder.deckBuilder(1));
  $scope.dealerCards = [$scope.deck.pop(), $scope.deck.pop()];
  $scope.playerCards = [$scope.deck.pop(), $scope.deck.pop()];
}]);

