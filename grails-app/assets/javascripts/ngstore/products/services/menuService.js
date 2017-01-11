/**
 * Created by aaron.arce.hernandez on 8/25/2016.
 */
//= wrapped

angular
    .module('ngstore.products')
    .factory('menuService', menuService);

function menuService($http, $q, productService) {
    var factory = {
        getMenu: getMenu
    };

    return factory;

    function getMenu() {
        var deferred = $q.defer();

        $http.get('/menu')
            .success(function(response) {
                productService.processImages(response.result.products)
                deferred.resolve(response);
            })
            .error(function(response) {
                deferred.reject(response);
            });

        return deferred.promise;
    }
}
