//= wrapped
//= require /angular/angular
//= require /angular/angular-ui-router
//= require /jquery/jquery
//= require /bootstrap/bootstrap
//= require /angular/angular-animate
//= require /angularjs-toaster/toaster
//= require /angular/ui-bootstrap-tpls
//= require /ngstore/core/ngstore.core
//= require /ngstore/index/ngstore.index
//= require /ngstore/layout/ngstore.layout
//= require_self
//= require /ngstore/routes

angular.module("ngstore", [
    "ngstore.layout",
    "ngstore.core",
    "ngstore.index",
    "ui.router",
    'ui.bootstrap',
    'ngAnimate',
    'toaster'
]);
