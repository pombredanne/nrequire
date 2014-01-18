nrequire
========
If your NODE_ENV environment variable is set to 'development' (case does not
matter), nrequire re-implements the Node.js require statement, adding an
asynchronous check to see if your NPM module agrees with your package.json and
if you have the latest version from NPM.

By default, notifications go to standard output via console.log, but you can
override this behavior by supplying the correct options.

If you use jshint, add `nrequire` to your globals section, e.g.

```JSON
{
    [...]
    "globals": {
        "nrequire": true
    }
}
```

Or you can add the following to each file where you use `nrequire`:

```JavaScript
/* global nrequire */
```

## Installation

    npm install nrequire

## Example

```JavaScript
// this function is optional and a simplification of the default
// implementation is shown
function logPackageJson(module, modVer, moduleLoc, packVer) {
    console.error('Module',module,'version',modVer,'at',moduleLoc,
                  'disagrees with package.json version:',packVer);
}

// this function is optional and a simplification of the default
// implementation is shown
function logNpm(module, modVer, moduleLoc, npmVer) {
    console.error('Module',module,'version',modVer,'at',moduleLoc,
                  'is out of date. The latest version is:',npmVer);
}

// the options are optional
require('nrequire')({
    checkpackageJson: true,
    checkNpm: true,
    colorNotifications: true,
    outputPackageJson: logPackageJson,
    outputNpm: logNpm
});
```

You want to require nrequire early in the execution of your Node.js application,
preferably before any other require statements.

## API
There is no API, other than the *optional* options you can pass to nrequire. If
you supply no options, nrequire uses the following defaults:

<table>
<tr><td><b>property name</b></td><td><b>type</b></td><td><b>default value</b>
</td></tr>
<tr><td>checkpackageJson</td><td>boolean</td><td>true</td></tr>
<tr><td>colorNotifications</td><td>boolean</td><td>true</td></tr>
<tr><td>checkNpm</td><td>boolean</td><td>true</td></tr>
<tr><td>checkNpm</td><td>boolean</td><td>true</td></tr>
<tr><td>outputPackageJson</td><td>function</td><td>undefined</td></tr>
<tr><td>outputNpm</td><td>function</td><td>undefined</td></tr>
</table>

The default action for notification of package.json and NPM version problems is
to display to standard out. Use outputPackageJson and outputNpm to override the
default notification behavior to suit your needs.

## License
The MIT License (MIT)

Copyright (c) 2014 Edmond Meinfelder

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

