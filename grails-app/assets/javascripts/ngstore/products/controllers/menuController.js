/**
 * Created by aaron.arce.hernandez on 8/25/2016.
 */
//= wrapped

angular
    .module('ngstore.products')
    .controller('menuController', menuController);

function menuController(productResult) {
    var menuCtrl = this;

    menuCtrl.productResult = productResult;
}
