let fs = require('fs');
let path = require('path')
let glob = require('glob');
let colors = require('colors');
let cwd = process.cwd();

let error = function(str) {
    console.log('ERROR! '.red + str);
    //process.exit(1);
}

/* API */
let brewster = {};

brewster.getPackage = function(name) {
    let package = {
        config: {},
        package: {}
    }

    if(fs.existsSync(path.join(__dirname, 'packages', name))) {
        if(fs.existsSync(path.join(__dirname, 'packages', name, 'package.json'))) {
            let packageInfo = fs.readFileSync(path.join(__dirname, 'packages', name, 'package.json'));
            try {
                packageInfo = JSON.parse(packageInfo.toString());
            } catch(e) {
                error('Invalid package.json file in the ' + name + 'package.')
            }

            /* Validity checks. */
            if(packageInfo.name === undefined) {
                error('Package must have a name.');
            } else if(packageInfo.version === undefined) {
                error('Package must have a defined version.');
            } else if(packageInfo.main === undefined) {
                error('Package must have a main file.')
            } else if(fs.existsSync(path.join(__dirname, 'packages', name, packageInfo.main))) {
                package.config = packageInfo;
                let pack;
                try {
                    pack = require(path.join(__dirname, 'packages', name, packageInfo.main));
                } catch(e) {
                    error('Error detected in package \'' + name + '\' : ' + e.message);
                }
                package.package = pack

                return package;
            }
        } else {
            error('A \'package.json\' file does not exist for the ' + name + ' package.');
        }
    } else {
        error('Package \'' + name + '\' does not exist.');
    }

    return false;
}

brewster.getPackages = function() {
    let files = glob.sync(path.join(__dirname, './packages/**')).slice(1);
    let packages = {};

    files.forEach((file) => {
        if(fs.lstatSync(path.join(file)).isDirectory()) {
            packages[path.basename(file)] = brewster.getPackage(path.basename(file));
        }
    });

    return packages;
}

brewster.getCWD = function() {
    return cwd;
}

brewster.setCWD = function(wd) {
    cwd = wd;
}

module.exports = brewster;