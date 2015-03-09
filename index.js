'use strict';

var objectToString = Object.prototype.toString;
var getPrototypeOf = Object.getPrototypeOf;
var ERROR_TYPE = '[object Error]';

module.exports = isError;

function isError(err) {
    while (err) {
        if (objectToString.call(err) === ERROR_TYPE) {
            return true;
        }
        err = getPrototypeOf(err);
    }
    return false;
}
