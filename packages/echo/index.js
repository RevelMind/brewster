let program = require('commander');
let path = require('path')
let config = require(path.join(__dirname, 'package.json'));

module.exports = {
    onCommand: function(cmd, args) {
        if(cmd.toLowerCase() == 'echo') {
            console.log(args.join(' '));
            return true;
        }
        return false;
    }
}