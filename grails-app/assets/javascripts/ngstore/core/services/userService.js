/**
 * Created by aaron.arce.hernandez on 8/30/2016.
 */
//= wrapped

angular.module('ngstore.core')
    .factory('userService', userService);

function userService($http, $q) {
    var factory = {
        getUser: getUser,
        createUser: createUser,
        updateUser: updateUser
    };

    return factory;

    function getUser(username) {

    }

    function createUser(user) {

    }

    function updateUser(user) {

    }
}
