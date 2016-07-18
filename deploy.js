'use strict';

let path = require('path');

require("shelljs/global");

cp('-Rf',path.join(__dirname,'.tmp/js/*'),path.join(__dirname,'js'));
cp('-Rf',path.join(__dirname,'.tmp/style/*'),path.join(__dirname,'css'));
cp('-Rf',path.join(__dirname,'.tmp/assets/*'),path.join(__dirname,'assets'));
rm('-rf',path.join(__dirname,'.tmp'))
