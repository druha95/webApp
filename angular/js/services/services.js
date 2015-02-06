var app = angular.module('services', []);



app.service("dataLists", function() {
	var _models = {
		audi: [ {id: 1, name: "A1"},{id: 1, name: "A2"},{id: 1, name: "A3"},{id: 1, name: "A4"},{id: 1, name: "A6"},{id: 1, name: "Q3"},{id: 1, name: "Q7"}],
        ford: [{id: 1, name: "Focus"},{id: 1, name: "Fiesta"},{id: 1, name: "Mondeo"},{id: 1, name: "Kuga"}],
        skoda: [{id: 1, name: "Fabia"},{id: 1, name: "Octavia"},{id: 1, name: "Rapid"},{id: 1, name: "Yeti"}]
	};

	var _cars = ['Audi', 'Ford', 'Skoda'];

	return {
		getModelList: function(car) {
			return _models[car];
		},

		getCarList: function() {
			return _cars;
		}
	}
});


app.service("choosenData", function() {
	var _car  = "Audi",
		_model = " ",
		_distance = 0;

	return {
		setCar: function(car) {
			_car = car;
		},
		setModel: function(model) {
			_model = model;
		},
		setDistance: function(distance) {
			_distance = distance;
		},
		getCar: function() {
			return _car;
		},
		getModel: function() {
			return _model;
		},
		getDistance: function() {
			return _distance;
		},
	}
});