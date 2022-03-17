const fs = require('fs')
const path = require('path')


let types = {
    media: ["mp4", "mkv", "mp3", "png"],
    archives: ["zip", "7z", "rar", "tar", "gz", "ar", "iso", "xz"],
    documents: [
      "docx",
      "doc",
      "pdf",
      "xlsx",
      "xls",
      "odt",
      "ods",
      "odp",
      "odg",
      "odf",
      "txt",
      "ps",
      "tex",
      "cpp"
    ],
    app: ["exe", "dmg", "pkg", "deb"],
  };



function organizeFn(dirPath)
{
    if(dirPath == undefined)
    {
        console.log('Please enter a valid Directory Path')
    }
    else
    {
        let doesExist = fs.existsSync(dirPath)
        
        if(doesExist == true)
        {
            destPath = path.join(dirPath, 'organized_files')
            console.log("Destination Path is " + destPath)

            if(fs.existsSync(destPath) == false)
            {
                fs.mkdirSync(destPath)
            }
            else
            {
                console.log('This folder already exists')
            }
        }
        else
        {
            console.log('Please enter a valid path')
        }
    }
    organizeHelper(dirPath,destPath)
}

function organizeHelper(src, dest)
{
    let childNames = fs.readdirSync(src)

    for(let i=0; i<childNames.length;i++)
    {
        let childAddress = path.join(src,childNames[i])
        let isFile = fs.lstatSync(childAddress).isFile()
        
        if(isFile == true)
        {
            let fileCategory = getCategory(childNames[i])
            console.log(childNames[i] + " belongs to type " + fileCategory)

            sendFiles(childAddress,dest,fileCategory)
        }
    }
}

function getCategory(name)
{
    let ext = path.extname(name)
    ext = ext.slice(1)
    // console.log(ext)

    for(let type in types)
    {
        let cTypeArr = types[type]

        for(let i=0;i<cTypeArr.length;i++)
            {
                if(cTypeArr[i] == ext)
                    return type
            }
    }
    return 'other'
}


function sendFiles(srcFilePath, dest, fileCategory)
{
    let catPath = path.join(dest,fileCategory)

    if(fs.existsSync(catPath) == false)
    {
        fs.mkdirSync(catPath)
    }

    let fileName = path.basename(srcFilePath)
    let destFilePath = path.join(catPath,fileName)

    fs.copyFileSync(srcFilePath,destFilePath)

    fs.unlinkSync(srcFilePath)

    console.log(fileName + " is copied to " + fileCategory)
}

module.exports={
    organizeKey : organizeFn
}