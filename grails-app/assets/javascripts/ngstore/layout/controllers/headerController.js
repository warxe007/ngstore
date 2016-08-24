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
                console.log(success);
                $state.reload();
            })
            .catch(function(error) {
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
}
