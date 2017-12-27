var q = require('q');
var fs = require('fs');

exports.getCapabilities = function (filename) {
    var deferred = q.defer();

    fs.readFile(filename, function (err, data) {
        var capabilities = {
            'browserName': 'chrome',
            'chromeOptions': {
                extensions: [
                    data.toString('base64')
                ]
            }
        };
        deferred.resolve(capabilities);
    });

    return deferred.promise;
};