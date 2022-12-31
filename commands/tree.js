let fs = require("fs");
let path = require("path");
function treeFn(dirPath) {
    // let destPath;
    if (dirPath == undefined) {

        treeHelper(process.cwd(), "");
        return;
    } else {
        let doesExist = fs.existsSync(dirPath);
        if (doesExist) {
            treeHelper(dirPath, "");
        } else {

            console.log("Kindly enter the correct path");
            return;
        }
    }
}

function treeHelper(dirPath, indent) {
    // checking is file or folder
    let isFile = fs.lstatSync(dirPath).isFile();
    if (isFile == true) {//if its a file
        let fileName = path.basename(dirPath);
        console.log(indent + "├──" + fileName);
    } else {//if its a folder
        let dirName = path.basename(dirPath)
        console.log(indent + "└──" + dirName);
        let childrens = fs.readdirSync(dirPath);
        //traversing through the contents of the file
        for (let i = 0; i < childrens.length; i++) {
            let childPath = path.join(dirPath, childrens[i]);
            treeHelper(childPath, indent + "\t");
        }
    }


}//exporting module
module.exports = {
    treeKey: treeFn
}