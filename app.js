var app = angular.module('slideShow', [])
	app.controller('slideController', ['$scope', function($scope){
/*Define the images' sources to feed the slideshow in your controller.
Should include next and previous buttons as well as individual buttons so users can navigate to any image in the show.
Should support captions for each image.
Should support auto-play, which would wait a specified time before auto transitioning between images.
Should be able to pause auto-play functionality.
The slideshow does not need to be animated.*/
	$scope.images = [
		{
			src: "img1.jpeg",
			caption: "caption 1"
		}, {
			src: "img2.jpeg",
			caption: "caption 2"
		}, {
			src: "img3.jpeg",
			caption: "caption 3"
		}, {
			src: "img4.jpeg",
			caption: "caption 4"
		}, {
			src: "img5.jpeg",
			caption: "caption 5"
		}]

		$scope.prev = function(){

		}
		$scope.next = function(){

		}
	

	}]);