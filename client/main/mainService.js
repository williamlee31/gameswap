angular
  .module('main.service', [])
  .service('MainService', function($http) {
    this.searchOfferings = function(game) {
      return $http.post('/searchofferings', game)
        .then(function(resp) {
          console.log('responseFromOfferings', resp);
          return resp.data;
        }.bind(this), function(error) {
          throw error;
        }.bind(this));
    };
    this.searchSeeking = function(game) {
      return $http.post('/searchseeking', game)
        .then(function(resp) {
          console.log('responseFromSeeking', resp);
          return resp.data;
        }.bind(this), function(error) {
          throw error;
        }.bind(this));
    };
    this.addRecipient = function(recipientId, recipientName) {
      this.recipientId = recipientId;
      this.recipientName = recipientName;
    };
    this.getRecipientId = function() {
      console.log('recipientId', this.recipientId);
      return this.recipientId;

    };
    this.getRecipientName = function() {
      return this.recipientName;
    };
  });
