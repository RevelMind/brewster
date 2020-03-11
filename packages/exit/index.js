let colors = require('colors');

module.exports = {
    onCommand: function(cmd, args) {
        if(cmd.toLowerCase() == 'exit') {
            console.log('Exiting terminal..'.red);
            process.exit(0);

            return true;
        }
        return false;
    }
}