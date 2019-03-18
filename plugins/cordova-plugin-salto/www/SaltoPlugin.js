cordova.define("cordova-plugin-salto.SaltoPlugin", function(require, exports, module) { var exec = require('cordova/exec');

exports.coolMethod = function (arg0, success, error) {
    exec(success, error, 'SaltoPlugin', 'coolMethod', [arg0]);
};

exports.openDoor = function (arg0, success, error) {
    exec(success, error, 'SaltoPlugin', 'openDoor',  [arg0]);
};

});
