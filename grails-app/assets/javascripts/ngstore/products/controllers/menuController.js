/**
 * Created by aaron.arce.hernandez on 8/25/2016.
 */
//= wrapped

angular
    .module('ngstore.products')
    .controller('menuController', menuController);

function menuController(menuResult) {
    var menuCtrl = this;

    menuCtrl.menuResult = menuResult;
}
