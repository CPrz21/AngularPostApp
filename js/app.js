angular.module("FinalApp",["lumx","ngRoute","ngResource"])
  .config(function($routeProvider) {

    $routeProvider
    .when("/", {
      controller:"MainController",
      templateUrl:"templates/home.html"
    })
    .when("/post/:id", {
      controller:"PostController",
      templateUrl:"templates/post.html"
    })
    .when("/posts/:id", {
      controller:"NewPostController",
      templateUrl:"templates/post_form.html"
    })
    .when("/posts/edit/:id", {
      controller:"PostController",
      templateUrl:"templates/post_form.html"
    })

});


// angular.module("FinalApp",["lumx","ngRoute","ngResource"])
//   .config(['$routeProvider','$locationProvider',function($routeProvider, $locationProvider) {
//     $locationProvider.hashPrefix('');
//     $routeProvider
//     .when("/", {
//       controller:"MainController",
//       templateUrl:"templates/home.html"
//     })
//     .when("/post/:id", {
//       controller:"PostController",
//       templateUrl:"templates/post.html"
//     })
//
//
// }]);
