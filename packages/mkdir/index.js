let brewster = require('../../index.js');
let path = require('path');
let fs = require('fs');

let error = function(str) {
    console.log('ERROR! '.red + str);
}

module.exports = {
    onCommand: function(cmd, args) {
        if(cmd.toLowerCase() == 'mkdir') {
            if(args.length == 1) {
                if(path.isAbsolute(args[0])) {
                    let p = path.resolve(args[0]);
                    if(fs.existsSync(p)) {
                        error('That path already exists.');
                    } else {
                        fs.mkdirSync(p);
                    }
                } else {
                    let p = path.resolve(path.join(brewster.getCWD(), args[0]));
                    if(fs.existsSync(p)) {
                        error('That path already exists.')
                    } else {
                        fs.mkdirSync(p);
                    }
                }
            } else {
                error('Invalid working directory.');
            }
            return true;
        }
        return false;
    }
}