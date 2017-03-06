angular.
module('phoneDetail').
component('phoneDetail', {
    templateUrl: 'components/phone-detail/phone-detail.template.html',
    controller: ['$routeParams', '$http',
        function PhoneDetailController($routeParams, $http) {
            var self = this;

            $http.get('phones/' + $routeParams.phoneId + '.json').then(function(response) {
                self.phone = response.data;
                console.log(response.data);
            });
        }
    ]
});
