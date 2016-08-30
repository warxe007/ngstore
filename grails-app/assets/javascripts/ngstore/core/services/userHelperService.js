/**
 * Created by aaron.arce.hernandez on 8/30/2016.
 */
//= wrapped

angular
    .module('ngstore.core')
    .factory('userHelperService', userHelperService);

function userHelperService($uibModal) {
    var factory = {
        openNewUserModal: openNewUserModal
    };

    return factory;

    function openNewUserModal() {
        var modalInstance = $uibModal.open({
            templateUrl: '/ngstore/core/newUser.html',
            controller: 'userController',
            controllerAs: 'userController',
            bindToController: true
        });
    }

}