var fs = require('fs');
var argv = require('yargs').argv;

var filename = argv.name ? argv.name : argv.file;
var filecontent = argv.content;

if (filecheck(filename)) 
{
    try {
        fs.appendFileSync('filesname.txt', filename + "\n")
        console.log(filename + " added to list");
    } catch (err) {
        console.log(filename + "not added to list");
    }
    try {
        fs.writeFileSync(filename, filecontent);
        console.log(filename + " created succesfully.\n");
    } catch (err) {
        console.log("Unable to create file");
    }
}
else{
    console.log("File already exists");
}
function filecheck(file) {
    //console.log(file);
    var content = fs.readFileSync('filesname.txt');
    var filenames = content.toString();
    var files = filenames.split('\n');
    var flag=0;
    for (var i = 0; i < files.length; i++) 
    {
        if(files[i]==file) 
        {
            flag=1;
            break;
        }
        else {
            flag=0;
        }
        //console.log(files[i]);
    }
    //console.log(flag);
    if(flag==1)
    {
        return false;
    }
    else{
        return true;
    }
}


