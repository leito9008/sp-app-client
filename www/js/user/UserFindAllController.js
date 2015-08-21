/* jshint bitwise: false, camelcase: true, curly: true, eqeqeq: true, globals: false, freeze: true, immed: true, nocomma: true, newcap: true, noempty: true, nonbsp: true, nonew: true, quotmark: double, undef: true, unused: true, strict: true, latedef: nofunc */

/* globals angular, console */

(function () {
    "use strict";

    angular
        .module("sp-app-client.controllers")
        .controller("UserFindAllController", UserFindAllController);

    UserFindAllController.$inject = ["UserFactory"];

    function UserFindAllController(UserFactory) {
        var vm = this;
        vm.users = [];

        activate();

        function activate() {
            return findAllUsers().then(function () {
                console.log('--> Activate findAllUsers');
            });
        }

        function findAllUsers() {
            return UserFactory.findAllUsers().then(function (users) {
                vm.users = users;
            }, function (err) {
                console.log(err);
            });
        }
    }

})();