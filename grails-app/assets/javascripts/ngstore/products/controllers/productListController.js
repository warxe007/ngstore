/**
 * Created by aaron.arce.hernandez on 8/25/2016.
 */

//= wrapped

angular
    .module("ngstore.products")
    .controller("ProductListController", ProductListController);

function ProductListController(productResult, productHelperService) {
    var listProductCtrl = this;

    listProductCtrl.products = productResult;
    listProductCtrl.openNewProductModal = productHelperService.openNewProductModal;
    listProductCtrl.openEditProductModal = productHelperService.openEditProductModal;
}

