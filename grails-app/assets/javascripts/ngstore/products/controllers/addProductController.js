/**
 * Created by aaron.arce.hernandez on 8/25/2016.
 */
//= wrapped

angular
    .module("ngstore.products")
    .controller("AddProductController", AddProductController);

function AddProductController($state, $uibModalInstance, productService, toasterService, Upload) {
    var addProductController = this;

    addProductController.saveNewProduct = saveNewProduct;
    addProductController.cancel = cancel;

    function saveNewProduct(product) {

        Upload.upload({
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
        });

        /*productService.saveProduct(product)
            .then(function(success){
                toasterService.success('Product successfully created.');
                $uibModalInstance.dismiss();
                $state.reload();
            })
            .catch(function(error) {
                toasterService.error(error.message);
            });*/
    }

    function cancel() {
        $uibModalInstance.dismiss('Cancel');
    }
}
