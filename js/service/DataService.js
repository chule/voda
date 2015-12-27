/*jslint browser: true*/
/*global console, Framework7, MyApp, $document*/

MyApp.angular.factory('DataService', ['$document', '$http', function ($document, $http) {
  'use strict';

  var pub = {};

  var eventListeners = {
    "movieClicked": []
  }

  pub.addEventListener = function (eventName, callback) {
    eventListeners[eventName].push(callback);
  };

  pub.movieClicked = function (movie) {
    for (var i = 0; i < eventListeners.movieClicked.length; i++) {
      eventListeners.movieClicked[i](movie);
    }
  };

  pub.getMovies = function () {
    return $http.get("moviedata.json")
  };

  return pub;
  
}]);