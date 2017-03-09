angular.
module('phoneDetail').
component('phoneDetail', {
    templateUrl: 'components/phone-detail/phone-detail.template.html',
    controller: ['$routeParams', '$http',
        function PhoneDetailController($routeParams, $http) {
            var self = this;

            self.setImage = function setImage(imageUrl) {
                self.mainImageUrl = imageUrl;
            };

            self.onDblclick = function onDblclick(imageUrl) {
                alert('You double-clicked image: ' + imageUrl);
            };

            $http.get('phones/' + $routeParams.phoneId + '.json').then(function(response) {
                self.phone = response.data;
                self.setImage(self.phone.images[0]);
                console.log(response.data);
            });
        }
    ]
});
