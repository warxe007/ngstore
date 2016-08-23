//= wrapped

angular
    .module('ngstore.core')
    .factory('loginService', loginService);

function loginService($http, $q, $cacheFactory) {
    var loginCache = $cacheFactory('login'),
        factory = {
            getLoggedUser: getLoggedUser
        };

    return factory;

    function getLoggedUser() {
        var deferred = $q.defer(),
            cachedLoggedUser = loginCache.get('loggedUser');

        if (cachedLoggedUser) {
            deferred.resolve(cachedLoggedUser);
        } else {
            $http({method: "GET", url: "userProfile/index"})
                .success(function(response, status) {
                    console.log(response);
                    console.log(status);
                    deferred.resolve(response);
                })
                .error(function(response) {
                    deferred.reject(response);
                });

            return deferred.promise;
        }

        return deferred.promise;
    }
}

