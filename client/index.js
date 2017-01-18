var blackjack = angular.module("blackjack", []);

blackjack.controller("blackjackController", function($scope){
  $scope.helloWorld = "Hello World!!!!";
  $scope.playerScore = 0;
  $scope.dealerScore = 0;
});