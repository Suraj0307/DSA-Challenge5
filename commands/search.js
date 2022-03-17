const fs = require('fs')
const path = require('path')

let hashMap = new Map();



function searchFn(dirPath,fileName)
{
    if(dirPath == undefined)
    {
        console.log("Please Enter a valid path")
    }
    else
    {
        let doesExist = fs.existsSync(dirPath);
        let isFolder = fs.lstatSync(dirPath).isFile()
        if((doesExist == true) && (isFolder==false))
        {
            searchHelper(dirPath)

            let result = compare(fileName)
            if(result == false)
            {
                console.log('\n')
                console.log("No search result found");
                console.log('\n')
            }
            else
            {
                console.log('\n')
                console.log("File found at location : "+ hashMap.get(fileName) )
                console.log('\n')
            }
        }
        else
        {
            console.log("File does not exist")
        }
    }
}



function searchHelper(dirPath)
{
    // console.log(content)

    isFile = fs.lstatSync(dirPath).isFile()
    if(isFile == true)
    {
        let fileName = path.basename(dirPath)
        hashMap.set(fileName,dirPath)
    }
    else
    {

        let children = fs.readdirSync(dirPath)
        for(let i=0;i<children.length;i++)
        {
            let childPath = path.join(dirPath,children[i])
            searchHelper(childPath)
        }
    }
}



function compare(fileName)
{
    let ans = false;
    ans = hashMap.has(fileName)
    return ans;
}






module.exports ={
    searchKey : searchFn
}