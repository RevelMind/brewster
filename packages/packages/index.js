let brewster = require('../../index.js');
let path = require('path');
let fs = require('fs');
let colors = require('colors');

let error = function(str) {
    console.log('ERROR! '.red + str);
}

module.exports = {
    onCommand: function(cmd, args) {
        if(cmd.toLowerCase() == 'packages') {
            if(args.length == 0) {
                let packages = brewster.getPackages();

                Object.keys(packages).forEach((name) => {
                    let package = packages[name];
                    let config = package.config;

                    console.log(config.name.green + " - " + config.description);
                    if(config.commands !== undefined) {
                        config.commands.forEach((command) => {
                            if(command.usage !== undefined) {
                                if(command.description !== undefined) {
                                    console.log("\t" + command.usage.green + ' - ' + command.description);
                                } else {
                                    console.log("\t" + command.usage.green);
                                }
                            } else {
                                error(config.name + ' : No usage defined for command.');
                            }
                        });
                    }
                });
            }

            return true;
        }
        return false;
    }
}