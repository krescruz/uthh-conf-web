var app = angular
	.module('uthhApp', [])
	.config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.headers.post['Content-Type'] = 'application/json';
    }]);
