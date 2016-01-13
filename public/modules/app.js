"use strict";

(function(){
    var app = angular.module("backend", ["backend.pages"]);
    app.controller("MainController", function($scope){
        //Die Sidebar wird nach dem Laden der Seite angezeigt.
        angular.element(document).ready(function(){
            $('.ui.sidebar').sidebar('toggle');
        });
    });
})();
