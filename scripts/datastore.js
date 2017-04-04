(function(window) {
    'use strict';
    var App = window.App || {};
    var Promise = window.Promise;

    // constructors should have their first letter capital
    function DataStore() {
        this.data = {};
    }

    function promiseResolvedWith(value) {
        var promise = new Promise(function(resolve, reject) {
            resolve(value);
        });
        return promise;
    }


    //function to access information
    DataStore.prototype.add = function(key, val) {
        return promiseResolvedWith(null);
    };

    DataStore.prototype.get = function(key) {
        return promiseResolvedWith(this.data[key]);
    };

    DataStore.prototype.getAll = function() {
        return promiseResolvedWith(this.data);
    };

    DataStore.prototype.remove = function(key) {
        delete this.data[key];
        return promiseResolvedWith(null);
    };

    App.DataStore = DataStore;
    window.App = App;
})(window);
