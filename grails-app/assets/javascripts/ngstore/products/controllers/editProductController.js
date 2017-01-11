/**
 * Created by aaron.arce.hernandez on 8/25/2016.
 */

//= wrapped

angular
    .module("ngstore.products")
    .controller("EditProductController", EditProductController);

function EditProductController($state, $uibModalInstance, productService, product, toasterService, Upload) {
    var editProductController = this;

    editProductController.product = product;
    editProductController.editProduct = editProduct;
    editProductController.cancel = cancel;

    function editProduct(product) {
        /*Upload.upload({
            url: '/product',
            data: product
        }).then(function (success) {
            toasterService.clear('working');
            toasterService.success(success.data.message);
            $uibModalInstance.close(success);
        }, function (error) {
            toasterService.clear('working');
            toasterService.error(error.errorMessage);
        }, function (evt) {
            //console.log('progress: ' + Math.min(100, parseInt(100.0 * evt.loaded / evt.total)));
        });*/

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