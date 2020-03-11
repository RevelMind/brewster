let colors = require('colors');
let readline = require('readline-sync');
let path = require('path');
let fs = require('fs');
let release = false;
let luna = require('../index');

let error = function(str) {
    console.log('ERROR! '.red + str);
}

/* Log Luna info on startup. */
console.log(('[' + (release ? 'RELEASE'.green : 'DEV'.red) + ']') + ' Luna ' + require('../package.json').version);
console.log('Copyright (c) RevelMind 2020');

//console.log(luna.getPackages());

while(true) {
    let cmd = readline.question(luna.getCWD().green + ' ~$ ').trim();

    if(cmd == '') {
        error('Invalid command.');
    } else {
        let all = cmd.split(' ');
        let cmdName = cmd[0];
        let cmdArgs = [];

        if(all.length > 1) {
            cmdArgs = all.slice(1);
        }
    }
}