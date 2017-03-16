angular.
module('core.phone').
factory('Phone', ['$resource',
    function($resource) {
        return $resource('phones/:phoneId.json', {}, {  // мы берем все телефоны для страницы деталей телефона, а как же файл просто со списком телефонов,
            query: {
                method: 'GET',
                params: {phoneId: 'phones'}, // что это? откуда и куда phones?
                isArray: true
            },
            // get: {
            //     method:'GET'
            // },
        });
    }
]);