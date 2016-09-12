/**
 * Created by aaron.arce.hernandez on 8/25/2016.
 */
//= wrapped

angular
    .module('ngstore.products')
    .factory('productService', productService);

function productService($http, $q) {
    var factory = {
        getProducts: getProducts,
        saveProduct: saveProduct,
        updateProduct: updateProduct
    };

    return factory;

    function getProducts() {
        var deferred = $q.defer();

        $http.get('/product')
            .success(function(response) {
                deferred.resolve(response);
            })
            .error(function(response) {
                deferred.reject(response);
            });

        return deferred.promise;
    }

    function saveProduct(product) {
        var deferred = $q.defer();

        console.log(product);

        $http.post('/product', product)
            .success(function(response) {
                deferred.resolve(response);
            })
            .error(function(response) {
                deferred.reject(response);
            });

        return deferred.promise;
    }

    function updateProduct(product) {
        var deferred = $q.defer();

        $http.put('/product', product)
            .success(function(response) {
                deferred.resolve(response);
            })
            .error(function(response) {
                deferred.reject(response);
            });
        return deferred.promise;
    }
}
