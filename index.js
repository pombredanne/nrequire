'use strict';
module.exports = initNrequire;

var _ = require('lodash');

var options = {
    checkpackageJson: true,
    checkNpm: true,
    colorNotifications: true,
    packageJsonPath: process.cwd()
};

var orig_require;

function checkModule(path) {
    // if the module is not in package.json exit
    // if module is in package.json, find module
    // if module not found, exit
    // Get module version from its package.json
    // Check module version agaist app's package.json
    // Check module version against npm.
}

function nrequire(path) {
    //var is = require('is2');
    if (options.colors && options.colorNotifications)
        console.log('PATH:'.yellow,path.red);
    else
        console.log('PATH:',path);

    process.nextTick(function() {
        checkModule(path);
    });
    require(path);
}


function initNrequire(opts) {

    // only active in development version
    if (process.env.NODE_ENV.toLowercase() !== 'development') {
        global.nrequire = require;
        return;
    }

    _.assign(options, opts);
    global.nrequire = nrequire;
    if (options.colors && options.colorNotifications)
        orig_require('colors');
}

