var devBj = angular.module("devBj", ["firebase","ngRoute"])  
.config(function($routeProvider){
        $routeProvider.when('/',
        {
            templateUrl:'numberInput.html'
        });

        $routeProvider.when('/user_options',
        {
            templateUrl:'userOptions.html'
        });
});;

