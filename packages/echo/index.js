let path = require('path')
let config = require(path.join(__dirname, 'package.json'));

module.exports = {
    onCommand: function(args) {
        console.log(args.join(' '));
    }
}