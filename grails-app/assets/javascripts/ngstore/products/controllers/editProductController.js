/**
 * Created by aaron.arce.hernandez on 8/25/2016.
 */

//= wrapped

angular
    .module("ngstore.products")
    .controller("EditProductController", EditProductController);

function EditProductController($state, $uibModalInstance, productService, product, toasterService) {
    var editProductController = this;

    editProductController.product = product;
    editProductController.editProduct = editProduct;
    editProductController.cancel = cancel;

    function editProduct(product) {
        productService.updateProduct(product)
            .then(function(success){
                toasterService.success('Product successfully updated.');
                $uibModalInstance.dismiss();
                $state.reload();
            })
            .catch(function(error) {
                toasterService.error('There was an error trying to update this product.');
            });
    }

    function cancel() {
        $uibModalInstance.dismiss('Cancel');
    }
}