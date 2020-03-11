module.exports = {
    onCommand: function(cmd, args) {
        if(cmd.toLowerCase() == 'echo') {
            console.log(args.join(" "));
            return true;
        }
        return false;
    }
}