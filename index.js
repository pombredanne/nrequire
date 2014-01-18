'use strict';

module.exports = miro;
var _ = require('lodash');

var options = {
    checkpackageJson: true,
    checkNpm: true,
    colorNotifications: true
};

var orig_require;

function nrequire(path) {

    //var is = require('is2');

    if (options.colors && options.colorNotifications)
        console.log('PATH:'.yellow,path.red);
    else
        console.log('PATH:',path);

    require(path);
}


function miro(opts) {

    // only active in development version
    if (process.env.NODE_ENV !== 'development') {
        global.mrequire = require;
        return;
    }

    _.assign(options, opts);

    global.nrequire = nrequire;
    //global.require = requireAndCheck;
    //require = requireAndCheck;

    //global.module.edmond = "Hello!";
    console.log('\nRequire:',global);


    if (options.colors && options.colorNotifications)
        orig_require('colors');

}

