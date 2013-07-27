function EmpireTabs() {
    this.tabs = [
        {
            name: 'Home', url: '/EmpireRenovations/#/'
        },
        {
            name: 'FAQ', url: '/EmpireRenovations/#/faq'
        },
        {
            name: 'Gallery', url: '/EmpireRenovations/#/gallery'
        },
        {
            name: 'About', url: '/EmpireRenovations/#/about'
        },
        {
            name: 'Contact', url: '/EmpireRenovations/#/contact'
        }
    ];
    this.setActive = (function(name) {
        $.each(this.tabs, function(index, value) {
            if (value.name === name) {
                value.active = 'active';
            } else {
                value.active = '';
            }
        });
    }).bind(this);
}
;
var ServicesConstant = {
    interior: [
        ['Additions', 'Windows'],
        ['Basements', 'Drywall'],
        ['Bathrooms', 'California-texture spraying'],
        ['Kitchens', 'Painting'],
        ['Back splash', 'Electrical'],
        ['Doors', 'Windows'],
        ['Ceramic tile', 'Plumbing'],
        ['Hardwood floors', 'Carpentry']
    ]
};
var GalleryConstant = {
    fullRoot: 'http://empirerenovations.ca/app/webroot/img/full/',
    thumbRoot: 'http://empirerenovations.ca/app/webroot/img/thumbnail/',
    images: [
        {
            name: 'Bathroom',
            urls: [
                'bathroom/IMG_1387.JPG',
                'bathroom/IMG_1358.JPG',
                'bathroom/IMG_0886.JPG',
                'bathroom/IMG_1386.JPG',
                'bathroom/IMG_1459.JPG',
                'bathroom/IMG_1230.JPG',
                'bathroom/IMG_1344.JPG',
                'bathroom/IMG_0907.JPG',
                'bathroom/IMG_1152.JPG',
                'bathroom/IMG_1439.JPG',
                'bathroom/IMG_1121.JPG',
                'bathroom/IMG_0895.JPG',
                'bathroom/1.jpg',
                'bathroom/3.jpg',
                'bathroom/7.JPG',
                'bathroom/IMG_1132.JPG',
                'bathroom/2.jpg',
                'bathroom/4.jpg',
                'bathroom/IMG_1503.JPG',
                'bathroom/5.jpg',
                'bathroom/IMG_0816.JPG',
                'bathroom/6.jpg',
                'bathroom/IMG_1359.JPG'
            ]
        }, {
            name: 'Door',
            urls: [
                'door/IMG_1402.JPG',
                'door/IMG_1403.JPG',
                'door/IMG_1405.JPG',
                'door/IMG_1404.JPG'
            ]
        }, {
            name: 'Plumbing',
            urls: [
                'plumbing/IMG_0841.JPG',
                'plumbing/IMG_1289.JPG',
                'plumbing/IMG_1290.JPG',
                'plumbing/IMG_1291.JPG',
                'plumbing/IMG_0852.JPG',
                'plumbing/IMG_1293.JPG',
                'plumbing/IMG_0850.JPG',
                'plumbing/IMG_1292.JPG',
                'plumbing/IMG_1287.JPG'
            ]
        }, {
            name: 'Fireplace',
            urls: [
                'fireplace/IMG_1438.JPG',
                'fireplace/IMG_1440.JPG',
                'fireplace/IMG_1433.JPG',
                'fireplace/IMG_1436.JPG',
                'fireplace/IMG_1437.JPG',
                'fireplace/IMG_1441.JPG',
                'fireplace/IMG_1432.JPG',
                'fireplace/IMG_1438.JPG',
            ]
        }, {
            name: 'Tile',
            urls: [
                'tile/IMG_1465.JPG',
                'tile/IMG_0913.JPG',
                'tile/IMG_0920.JPG',
                'tile/IMG_1458.JPG',
                'tile/IMG_0921.JPG',
                'tile/IMG_1468.JPG',
                'tile/IMG_1450.JPG',
            ]
        }, {
            name: 'Kitchen',
            urls: [
                'kitchen/IMG_1366.JPG',
                'kitchen/IMG_1367.JPG',
                'kitchen/IMG_1369.JPG',
                'kitchen/1.jpg',
                'kitchen/2.jpg',
                'kitchen/3.JPG',
                'kitchen/4.jpg',
                'kitchen/IMG_1368.JPG',
            ]
        }, {
            name: 'Hardwood',
            urls: [
                'hardwood/IMG_1409.JPG',
                'hardwood/IMG_1433.JPG',
                'hardwood/IMG_1434.JPG',
                'hardwood/1.jpg',
                'hardwood/3.jpg',
                'hardwood/2.jpg'
            ]
        }, {
            name: 'Basement',
            urls: [
                'basement/IMG_1401.JPG'
            ]
        }, {
            name: 'Lament',
            urls: [
                'lament/IMG_1047.JPG',
                'lament/IMG_1046.JPG',
                'lament/IMG_1067.JPG',
                'lament/IMG_1079.JPG',
                'lament/IMG_1081.JPG',
                'lament/IMG_1050.JPG',
                'lament/IMG_1080.JPG',
                'lament/IMG_1045.JPG',
                'lament/IMG_1048.JPG',
                'lament/IMG_1049.JPG'
            ]
        }, {
            name: 'Carpet',
            urls: [
                'carpet/IMG_1128.JPG'
            ]
        }, {
            name: 'Window',
            urls: [
                'window/IMG_1338.JPG'
            ]
        }
    ]
};
function MainController($scope, $tabs, $interiorServices, $galleryConstant) {
    $scope.tabs = $tabs.tabs;
    $tabs.setActive('Home');
    $scope.imageFullRoot = $galleryConstant.fullRoot;
    $scope.imageThumbRoot = $galleryConstant.thumbRoot;
    $scope.interiorServices = $interiorServices.interior;
    $scope.images = $galleryConstant.images;
}

function FaqController($scope, $tabs) {
    $scope.tabs = $tabs.tabs;
    $tabs.setActive('FAQ');
}

function GalleryController($scope, $tabs, $galleryConstant) {
    $scope.tabs = $tabs.tabs;
    $tabs.setActive('Gallery');
    $scope.images = $galleryConstant.images;
    $scope.imageFullRoot = $galleryConstant.fullRoot;
    $scope.imageThumbRoot = $galleryConstant.thumbRoot;
    $.each($scope.images, function(index, value){
        value
    });
}

function AboutController($scope, $tabs) {
    $scope.tabs = $tabs.tabs;
    $tabs.setActive('About');
}

function ContactController($scope, $tabs) {
    $scope.tabs = $tabs.tabs;
    $tabs.setActive('Contact');
}

angular.element(document).ready(function() {
    var module = angular.module('empire', [])
            .value('$tabs', new EmpireTabs())
            .value('$interiorServices', ServicesConstant)
            .value('$galleryConstant', GalleryConstant)
            .directive('postRepeatDirective', function() {
                return function(scope, element, attrs) {
                  if (scope.$last){
                      $('a.gallery').colorbox({
                          rel: 'gal',
                          width: '90%',
                          height: '90%',
                          innerWidth: '100%',
                          innerHeight: '100%',
                          transition: 'fade',
                          speed: 250
                      });
                  }
                }
            })
            .config(['$routeProvider', function($routeProvider) {
            return $routeProvider.when('/', {
                templateUrl: 'html/main.html',
                controller: MainController
            }).when('/faq', {
                templateUrl: 'html/faq.html',
                controller: FaqController
            }).when('/gallery', {
                templateUrl: 'html/gallery.html',
                controller: GalleryController
            }).when('/about', {
                templateUrl: 'html/about.html',
                controller: AboutController
            }).when('/contact', {
                templateUrl: 'html/contact.html',
                controller: ContactController
            }).otherwise({
                redirectTo: '/'
            });
        }]);
    angular.bootstrap(angular.element(document), ['empire']);
});
