// Define the `phonecatApp` module
//var phonecatApp = angular.module('phonecatApp', []);

// Define the `phonecatApp` module
angular.module('phonecatApp', [
  // ...which depends on the `phoneList` module
  // 'ui.bootstrap',
    'core',
  'phoneList',
    'ngRoute',
    'phoneDetail'
]);


