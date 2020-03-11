let colors = require("colors");
let readline = require("readline-sync");
let release = false;

/* Log Luna info on startup. */
console.log(("[" + (release ? "RELEASE".green : "DEV".red) + "]") + " Luna " + require("./package.json").version);
console.log("Copyright (c) RevelMind 2020");
