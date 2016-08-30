/**
 * Created by aaron.arce.hernandez on 8/30/2016.
 */
//= wrapped

angular
    .module('ngstore.core')
    .controller('userController', userController);

function userController($state, $uibModalInstance, userService, toasterService) {
    var userController = this;

    userController.createNewUser = createNewUser;
    userController.cancel = cancel;

    function createNewUser(user) {
        console.log(user);
        /*userService.createUser(user)
            .then(function(success){
                toasterService.success('User successfully created.');
                $uibModalInstance.dismiss();
                $state.reload();
            })
            .catch(function(error) {
                toasterService.error('There was an error trying to create this user.');
            });*/
    }

    function cancel() {
        $uibModalInstance.dismiss('Cancel');
    }
}