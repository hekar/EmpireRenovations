function EmpireTabs() {
	return {
		this.tabs = [
			{name:'Home', url:'/'},
			{name:'FAQ', url:'/faq'},
			{name:'Gallery', url:'/gallery'},
			{name:'About', url:'/about'},
			{name:'Contact', url:'/Contact'}
		];
	}
}

function MainController($scope, $tabs) {
	$scope.tabs = $tabs.tabs;
}

function FaqController($scope, $tabs) {
	$scope.tabs = $tabs.tabs;
}

function GalleryController($scope, $tabs) {
	$scope.tabs = $tabs.tabs;

}

function AboutController($scope, $tabs) {
	$scope.tabs = $tabs.tabs;

}

function ContactController($scope, $tabs) {
	$scope.tabs = $tabs.tabs;

}

$(document).ready(function() {
	module = angular.module('empire', [])
	module.value('$tabs', EmpireTabs());
	module.config(['$routeProvider', function($routeProvider) {
		$routeProvider.
		when('/', {
			templateUrl: 'html/main.html',   
			controller: MainController
		}).
		when('/faq', {
			templateUrl: 'html/faq.html',
			controller: FaqController
		}),
		when('/gallery', {
			templateUrl: 'html/gallery.html',
			controller: GalleryController
		}),
		when('/about', {
			templateUrl: 'html/about.html',
			controller: AboutController
		}),
		when('/contact', {
			templateUrl: 'html/contact.html',
			controller: ContactController
		}),
		otherwise({
			redirectTo: '/'
		});
	}]);
});
