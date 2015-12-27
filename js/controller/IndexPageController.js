/*jslint browser: true*/
/*global console, MyApp*/

MyApp.angular.controller('IndexPageController', ['$scope', '$http', 'InitService', 'DataService', 
	function ($scope, $http, InitService, DataService) {
	  'use strict';
	  
	  	$scope.onItemClicked = function (movie) {
	  		DataService.movieClicked(movie);
	  	}

		InitService.addEventListener('ready', function () {
			DataService.getMovies().then(function (result) {
				console.log(result);
				$scope.movies = result.data.movies;
			}, function (err) {
				console.error(err);

			});
		});
  
}]);