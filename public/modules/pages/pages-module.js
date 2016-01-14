"use strict";

var pages = angular.module("backend.pages", ["ngResource", "ngRoute", "ui.sortable"]);

pages.config(function($routeProvider){
   $routeProvider
       .when("/pages", {
            templateUrl: "modules/pages/pages-overview.html",
            controller: "PageOverviewController"
       })
       .when("/pages/:id/edit", {
            templateUrl: "modules/pages/page-edit.html",
            controller: "PageEditController"
       })
       .when("/pages/add", {
           templateUrl: "modules/pages/page-add.html",
           controller: "PageAddController"
       });
});

//Page Overview Controller
pages.controller("PageOverviewController", function($scope, Page){
    $scope.pages = Page.query(function(pages){
        console.log(pages);
    });
    $scope.delete = function(pageId, index){
        $('.ui.basic.modal')
            .modal({
                closable  : false,
                onDeny    : function(){
                },
                onApprove : function() {
                    Page.delete({id: pageId});
                    $scope.pages.splice(index, 1);
                }
            }).modal("show");
    };
});

//Page Edit Controller
pages.controller("PageEditController", function($scope, $routeParams){
    $scope.page = Page.get({"_id": $routeParams.id}, function(page){
        $scope.page = page;
    });
});

pages.factory("Page", function($resource){
    return $resource("/api/pages/:id");
});