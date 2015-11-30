(function(){
	angular
	.module('uthhApp')
	.controller("UthhController", UthhController);

	UthhController.$inject = ['$scope', 'UthhService'];

	function UthhController($scope, uthhService){
		var vm = this;
		vm.hola = 'Hola mundo';

		uthhService.getEquipos();
	};
})();
