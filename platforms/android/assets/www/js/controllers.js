angular.module('starter.controllers', [])
.controller('MainCtrl', function($scope, $ionicPlatform, $state, Camera) {

  $scope.image = null;  

  function successCallBack(data){
    $scope.image = "data:image/jpeg;base64," + data;    
    $state.go($state.current, {}, {reload: true});
  }

  function errorCallBack(){
    $ionicPopup.alert({ title: 'Falhou', template: 'Não foi possível tirar a foto. Tente novamente, por favor.' });
  }

  //Take Photo
  $scope.takePhoto = function() {
      Camera.getPicture(successCallBack,errorCallBack);
  };

});