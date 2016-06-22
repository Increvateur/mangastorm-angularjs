var myApp = angular.module("myApp", ["ngRoute", "ui.bootstrap"]);

myApp.config(["$routeProvider", function($routeProvider){
  $routeProvider.
    when("/main", {
      templateUrl: "/views/routes/main.html",
      controller: "MainController"
    }).

    when("/series", {
      templateUrl: "/views/routes/series.html",
      controller: "SeriesController"
    }).

    when("/series/:seriesId", {
      templateUrl: "/views/routes/chapters.html",
      controller: "ChaptersController"
    }).

    when("/series/:seriesId/:chapterId", {
      templateUrl: "/views/routes/chapterview.html",
      controller: "ChaptersController"
    }).

    otherwise({
      redirectTo: '/main'

    });

}]);
