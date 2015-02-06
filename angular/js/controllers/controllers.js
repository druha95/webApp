var app = angular.module('ctrl', []);


app.controller("appCtrl", function($scope, choosenData, dataLists) {

	$scope.car = 'Audi';
	$scope.modelsList = [];
	$scope.model = ' ';
	$scope.distance = 0;
	$scope.carList = dataLists.getCarList();


	$scope.createModelsList = function(car) {
		$scope.modelsList = dataLists.getModelList(car.toLowerCase());
		choosenData.setCar($scope.car);
	}

	$scope.changeModel = function(model) {
		choosenData.setModel(model.name);
	}

	$scope.getDistance = function(distance) {
		choosenData.setDistance(distance);
	}
	

	$scope.createModelsList($scope.car);


	
	choosenData.setDistance($scope.distance);


});

app.controller("resultCtrl", function($scope, choosenData) {

	$scope.result = "Ви вибрали автомобіль " + choosenData.getCar() + ", моделі " + choosenData.getModel() + " з пробігом " + choosenData.getDistance(); 
});