// Help function used to present all possible help options
let fs = require("fs");
let path = require("path");
function helpFn() {
    console.log(`
    List of All the commands:
                 node main.js tree "directoryPath"
                node main.js organize "directoryPath"
                node main.js help
                `);
}//exporting the module
module.exports={
    helpKey: helpFn
}