var colors = require("colors");
var readline = require("readline-sync");
var release = false;

console.log(("[" + (release ? "RELEASE".green : "DEV".red) + "]") + " Luna " + require("./package.json").version);
console.log("Copyright (c) RevelMind 2020");
