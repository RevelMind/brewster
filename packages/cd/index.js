let brewster = require('../../index.js');
let path = require('path');
let fs = require('fs');

let error = function(str) {
    console.log('ERROR! '.red + str);
}

module.exports = {
    onCommand: function(cmd, args) {
        if(cmd == 'cd') {
            if(args.length == 1) {
                if(path.isAbsolute(args[0])) {
                    let p = path.resolve(args[0]);
                    if(fs.existsSync(p) && fs.lstatSync(p).isDirectory()) {
                        brewster.setCWD(p);
                    } else {
                        error('That path does not exist or is not a directory.');
                    }
                } else {
                    let p = path.resolve(path.join(brewster.getCWD(), args[0]));
                    if(fs.existsSync(p)) {
                        brewster.setCWD(p);
                    } else {
                        error('That path does not exist or is not a directory.');
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