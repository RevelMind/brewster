module.exports = {
    onCommand: function(cmd, args) {
        if(cmd == "echo") {
            console.log(args.join(" "));
        }
    }
}