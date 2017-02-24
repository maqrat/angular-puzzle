angular.
module('phoneList').
component('phoneList', {
  templateUrl: 'components/phone-list/phone-list.template.html',
  //controller: function PhoneListController() {
    // this.phones = [
    //     {
    //         name: 'Nexus S',
    //         snippet: 'Fast just got faster with Nexus S.',
    //         age: 3
    //     }, {
    //         name: 'Motorola XOOM™ with Wi-Fi',
    //         snippet: 'The Next, Next Generation tablet.',
    //         age: 1
    //     }, {
    //         name: 'MOTOROLA XOOM™',
    //         snippet: 'The Next, Next Generation tablet.',
    //         age: 2
    //     }
    // ];
    // this.orderProp = 'age';
    // },

    controller: ['$http',
        function PhoneListController($http) {
            var self = this;
            self.orderProp = 'age';

            $http.get('phones/phones.json').then(function(response) {
                self.phones = response.data.slice(0, 5);
            });
        }
    ]
});

// angular.
// module('phoneList').
// component('phoneList', {
//     templateUrl: 'phone-list/phone-list.template.html',
//     controller: ['$http',
//         function PhoneListController($http) {
//             var self = this;
//             self.orderProp = 'age';
//
//             $http.get('phones/phones.json').then(function(response) {
//                 self.phones = response.data;
//             });
//         }
//     ]
// });

// function PhoneListController($http) {...}
// PhoneListController.$inject = ['$http'];
// ...
// .component('phoneList', {..., controller: PhoneListController});

// function PhoneListController($http) {...}
// ...
// .component('phoneList', {..., controller: ['$http', PhoneListController]});
