var app = angular.module('slideShow', [])
	app.controller('slideController', ['$scope', function($scope){
/*Define the images' sources to feed the slideshow in your controller.
Should include next and previous buttons as well as individual buttons so users can navigate to any image in the show.
Should support captions for each image.
Should support auto-play, which would wait a specified time before auto transitioning between images.
Should be able to pause auto-play functionality.
The slideshow does not need to be animated.*/
	$scope.images = [
		{ src: "img1.jpeg", caption: "Lonely cabin with mountain backdrop", item:"O" },
		{ src: "img2.jpeg", caption: "Beautiful lake with rolling hills", item:"O" },
		{ src: "img3.jpeg", caption: "Frozen pond on a dreary day", item:"O" },
		{ src: "img4.jpeg", caption: "snow covered powerlines in the afternoon", item:"O" },
		{ src: "img5.jpeg", caption: "Sunny winter day in the forest", item:"O" },
		]

		$scope.currentIndex = 0;

		$scope.setCurrentSlideIndex = function (index) {
			$scope.currentIndex = index;
		};

		$scope.isCurrentSlideIndex = function (index) {
			return $scope.currentIndex === index;
		};


		$scope.prev = function(){
			$scope.currentIndex = ($scope.currentIndex < $scope.images.length - 1) ? ++$scope.currentIndex : 0;
		}
		$scope.next = function(){
			$scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $$scope.images.length - 1;
		}
		
		

	}]);