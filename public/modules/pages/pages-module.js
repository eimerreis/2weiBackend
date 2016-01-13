"use strict";

var pages = angular.module("backend.pages", ["ngResource", "ngRoute", "ui.sortable"]);

pages.config(function($routeProvider){
   $routeProvider
       .when("/pages", {
            templateUrl: "modules/pages/pages-overview.html",
            controller: "PageOverviewController"
       })
       .when("/pages/:id", {
            templateUrl: "modules/pages/page-detail.html"
       });
});

pages.controller("PageOverviewController", function($scope, Page){
    $scope.pages = Page.query(function(pages){
        console.log(pages);
    });
});

pages.factory("Page", function($resource){
    return $resource("/api/pages/:id");
});