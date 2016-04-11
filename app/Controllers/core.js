var app = angular.module('MainApp', [])

app.factory('Search', function() {

	var search = '';

	function setSearch(bus) {
		search = bus;
	}

	function getSearch() {
		return search;
	}

	return {
		setSearch: setSearch,
		getSearch: getSearch
	};

});


app.controller('mainController', function ($scope, $http, Search) {

	$scope.loadList = function() {
		location.href = "doctors";
	};
	$scope.search = {
		searchText: ''
	};
	$scope.$watch('table', function(){
		$scope.toggleText = $scope.table ? 'Search' : 'Go Back';
	})


	$scope.table = true;

	$scope.Search = function(bus){
		console.log(bus);
	Search.setSearch(bus);
	$scope.results = {};
	$http.get('/api/doctor/' + bus).success(function (data) {
		console.log(data);
		$scope.results = data;

	})
		.error(function (data) {
			console.log('Error: ' + data);
		});

}


	$scope.doctors = {};
	$http.get('/api/doctor').success(function (data) {
		$scope.doctors = data;
	})
		.error(function (data) {
			console.log('Error: ' + data);
		});

});



