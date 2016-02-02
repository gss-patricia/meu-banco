angular.module('starter.services', [])
.factory('Camera', function() {
  return {
    getPicture: function(successCallback, errorCallback) {
      navigator.camera.getPicture(successCallback, errorCallback, {
        quality: 100,
        allowEdit : true,
        saveToPhotoAlbum: true,
        destinationType: Camera.DestinationType.DATA_URL,
        mediaType: Camera.MediaType.PICTURE,
        targetWidth: 200,
        targetHeight: 200
      });
    }
  }
});