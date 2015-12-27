
// http://stackoverflow.com/questions/26604952/a-simple-cordova-android-example-including-sqlite-read-write-and-search

// Wait for Cordova to load
//
document.addEventListener("deviceready", onDeviceReady, false);

// http://www.oodlestechnologies.com/blogs/Use-of-Web-SQL-in-Phonegap
// https://github.com/orbitaloop/WebSqlSync

function onDeviceReady () {

    var app = angular.module("toDoApp", []);

    app.controller("TodoCtrl", ["$scope", function ($scope) {

        $scope.todos = [];

        var Todo = $data.define("Todo", {
            task: String,
            place: String,
            done: Boolean
        });

        Todo.readAll().then(function (todos) {
            $scope.$apply(function () {
                $scope.todos = todos;
            });
        });

        $scope.addNew = function (todo) {
            Todo.save(todo).then(function (todo) {
                $scope.$apply(function () {
                    $scope.newTodo = null;
                    $scope.todos.push(todo);
                });
            });
        };

        $scope.remove = function (todo) {

            todo.remove();

            Todo.readAll().then(function (todos) {
                $scope.$apply(function () {
                    $scope.todos = todos;
                });
            });         
        };

    }]);
    
};

