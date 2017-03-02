// Define the `phonecatApp` module
//var phonecatApp = angular.module('phonecatApp', []);

// Define the `phonecatApp` module
angular.module('phonecatApp', [
  // ...which depends on the `phoneList` module
  // 'ui.bootstrap',
  'phoneList',
    'ngRoute',
    'phoneDetail'
]);


