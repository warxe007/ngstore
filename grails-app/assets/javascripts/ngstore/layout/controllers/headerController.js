//= wrapped

angular
    .module("ngstore.layout")
    .controller("HeaderController", HeaderController);

function HeaderController(loggedUser) {
    var headerController = this;

    headerController.loggedUser = loggedUser;
}
