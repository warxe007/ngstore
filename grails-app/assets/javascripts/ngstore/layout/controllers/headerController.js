//= wrapped

angular
    .module("ngstore.layout")
    .controller("HeaderController", HeaderController);

function HeaderController($state, loggedUser, loginService) {
    var headerController = this;

    headerController.loggedUser = loggedUser;
    headerController.login = loginFn;
    headerController.logout = logoutFn;

    function loginFn(username, password) {
        loginService.login(username, password)
            .then(function(success) {
                processSuccessResponse(success);
            })
            .catch(function(error, status) {
                console.log(error);
            });
    }

    function logoutFn() {
        loginService.logout()
            .then(function(success) {
                $state.reload();
            })
            .catch(function(error) {
                console.log(error);
            });
    }

    function processSuccessResponse(successResponse) {
        if(successResponse.data.success) {
            $state.reload();
        } else if(successResponse.data.error) {
            headerController.loginErrorMessage = successResponse.data.error;
        }
    }
}
