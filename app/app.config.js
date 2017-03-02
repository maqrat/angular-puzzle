angular.
module('phonecatApp').
config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('');

        $routeProvider.
        when('/phones', {
            template: '<phone-list></phone-list>'
        }).
        when('/phones/:phoneId', { //phoneId is a variable = $routeParams
            template: '<phone-detail></phone-detail>'
        }).
        otherwise('/phones');
    }
    //$locationProvider.html5Mode(true); //activate HTML5 Mode
]);

// appModule.config(['$locationProvider', function($locationProvider) {
//     $locationProvider.hashPrefix('');
// }]);