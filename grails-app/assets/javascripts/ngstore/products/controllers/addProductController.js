/**
 * Created by aaron.arce.hernandez on 8/25/2016.
 */
//= wrapped

angular
    .module("ngstore.products")
    .controller("AddProductController", AddProductController);

function AddProductController($state, $uibModalInstance, productService, toasterService) {
    var addProductController = this;

    addProductController.saveNewProduct = saveNewProduct;
    addProductController.cancel = cancel;

    function saveNewProduct(product) {
        productService.saveProduct(product)
            .then(function(success){
                toasterService.success('Product successfully created.');
                $uibModalInstance.dismiss();
                $state.reload();
            })
            .catch(function(error) {
                toasterService.error(error.message);
            });
    }

    function cancel() {
        $uibModalInstance.dismiss('Cancel');
    }
}
