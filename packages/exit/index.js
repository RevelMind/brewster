let colors = require('colors');

module.exports = {
    onCommand: function(args) {
        console.log('Exiting terminal..'.red);
        process.exit(0);
    }
}