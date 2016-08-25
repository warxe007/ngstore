//= wrapped

angular
    .module('ngstore.core')
    .factory('loginService', loginService);

function loginService($http, $q, $cacheFactory) {
    var loginCache = $cacheFactory('login'),
        factory = {
            login: login,
            getLoggedUser: getLoggedUser,
            logout: logout
        };

    return factory;

    function login(user, pass, rememberme) {
        var deferred = $q.defer();


        var config = {
            params: {
                username: user,
                password: pass,
                rememberme: false
            },
            ignoreAuthModule: 'ignoreAuthModule'
        };
        $http.post('login/authenticate', '', config)
            .success(function(data, status, headers, config) {
                var res = {
                    data: data,
                    status: status
                };
                deferred.resolve(res);
            }).error(function(data, status, headers, config) {
                var res = {
                    data: data,
                    status: status
                };
                deferred.reject(res);
                /*$rootScope.authenticationError = true;
                Session.invalidate();*/
        });

        return deferred.promise;
    }

    function logout() {
        var deferred = $q.defer();

        $http({method: "GET", url: "logout"})
            .success(function(response) {
                deferred.resolve(response);
            })
            .error(function(response) {
                deferred.reject(response);
            });

        return deferred.promise;
    }

    function getLoggedUser() {
        var deferred = $q.defer(),
            cachedLoggedUser = loginCache.get('loggedUser');

        if (cachedLoggedUser) {
            deferred.resolve(cachedLoggedUser);
        } else {
            $http({method: "GET", url: "userProfile/index"})
                .success(function(response) {
                    var userProfile = processUserProfileResponse(response);
                    deferred.resolve(response);
                })
                .error(function(response) {
                    deferred.reject(response);
                });

            return deferred.promise;
        }

        return deferred.promise;
    }

    function processUserProfileResponse(userProfile) {
        userProfile.isSuperAdmin = _.findWhere(userProfile.roles, {authority: 'ROLE_SUPER_ADMIN'}) ? true : false;
        userProfile.isAdmin = _.findWhere(userProfile.roles, {authority: 'ROLE_ADMIN'}) ? true : false;
        userProfile.isRegUser = _.findWhere(userProfile.roles, {authority: 'ROLE_USER'}) ? true : false;
    }
}

