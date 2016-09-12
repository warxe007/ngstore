//= wrapped
//= require /angular/angular
//= require /angular/angular-ui-router
//= require /jquery/jquery
//= require /bootstrap/bootstrap
//= require /underscore/underscore
//= require /angular/angular-underscore-module
//= require /angular/angular-animate
//= require /angularjs-toaster/toaster
//= require /angular/ui-bootstrap-tpls
//= require /ng-file-upload/ng-file-upload
//= require /ngstore/core/ngstore.core
//= require /ngstore/index/ngstore.index
//= require /ngstore/layout/ngstore.layout
//= require /ngstore/products/ngstore.products
//= require_self
//= require /ngstore/routes

angular.module("ngstore", [
    "ngstore.layout",
    "ngstore.core",
    "ngstore.index",
    "ngstore.products",
    "ui.router",
    'ui.bootstrap',
    'ngAnimate',
    'toaster',
    'underscore',
    'ngFileUpload'
]);
