/**
 * Created by aaron.arce.hernandez on 8/25/2016.
 */
//= wrapped

angular
    .module('ngstore.products')
    .factory('productHelperService', productHelperService);

function productHelperService($uibModal) {
    var factory = {
        openNewProductModal: openNewProductModal,
        openEditProductModal: openEditProductModal
    };

    return factory;

    function openNewProductModal() {
        var modalInstance = $uibModal.open({
            templateUrl: '/ngstore/products/addProduct.html',
            controller: 'AddProductController',
            controllerAs: 'addProductController',
            bindToController: true
        });
    }

    function openEditProductModal(product) {
        var modalInstance = $uibModal.open({
            templateUrl: '/ngstore/products/editProduct.html',
            controller: 'EditProductController',
            controllerAs: 'editProductController',
            bindToController: true,
            resolve: {
                product: function() {
                    return product;
                }
            }
        });
    }
}
