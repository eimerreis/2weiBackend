"use strict";

var pages = angular.module("backend.pages", ["ngRoute"]);

pages.config(function($routeProvider){
   $routeProvider
       .when("/pages", {
            templateUrl: "modules/pages/pages-overview.html"
       })
       .when("/pages/:id", {
            templateUrl: "modules/pages/page-detail.html"
       });
});