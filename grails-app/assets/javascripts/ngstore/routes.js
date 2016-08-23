//= wrapped
//= require /angular/angular
//= require /ngstore/core/ngstore.core
//= require /ngstore/index/ngstore.index

function routes($stateProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider.rule(function ($injector, $location) {
        var path = $location.path();
        // If no path is defined then re route the user to the home page. For now, product list.
        if (path === "" || path === "/") {
            $injector.invoke(['$state', function ($state) {
                $state.transitionTo('app.home', {});
            }]);
            return "home";
        }
    });
    $urlRouterProvider.otherwise(function ($injector, $location) {
        var path = $location.path();
             /*if (path !== "" && path !== "/") {
                 $injector.invoke(['$state', function ($state) {
                     $state.get('error').error = {status: '404'};
                     $state.go('error', {});
                 }]);
                 return "error";
             }*/
    });
    $stateProvider
        .state('app', {
            abstract:true,
            url: '/',
            resolve: {
                loggedUser: function(loginService) {
                    return loginService.getLoggedUser();
                }
            },
            views: {
                'header': {
                    templateUrl: '/ngstore/layout/header.html',
                    controller: 'HeaderController',
                    controllerAs: 'HC'
                },
                'content': {
                    templateUrl: '/ngstore/core/home.html'
                },
                'footer': {
                    templateUrl: '/ngstore/layout/footer.html',
                    controller: 'FooterController',
                    controllerAs: 'FC'
                }
            }
        })
        .state('app.home', {
            url: 'home',
            views: {
                'content@': {
                    templateUrl: '/ngstore/core/home.html',
                    controller: 'HomeController',
                    controllerAs: 'HOC'
                }
            }
        })
        .state('error', {
            views: {
                'content': {
                    templateUrl: '/ngstore/layout/error.html',
                    controller: 'ErrorController',
                    controllerAs: 'EC'
                }
            }
        });

}

// Configure the app with the routes
angular
    .module('ngstore')
    .config(routes);