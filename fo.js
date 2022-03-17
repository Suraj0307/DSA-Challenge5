let inputArr = process.argv.slice(2);
let searchInput = inputArr.slice(2);
const tree = require('./commands/tree')
const organize = require('./commands/organize')
const help = require('./commands/help')
const search = require('./commands/search')

searchInput = searchInput.join(' ')
let command = inputArr[0]

// console.log(searchInput)
switch (command) {

    case 'tree':
        tree.treeKey(inputArr[1])
        break;
    case 'organize':
        organize.organizeKey(inputArr[1])
        break;
    case 'help':
        help.helpKey()
        break;
    case 'search':
        search.searchKey(inputArr[1], searchInput)
        break;

    default:
        console.log('Please enter a valid command')
        break;

}


// node .\fo.js organize 'E:\DSA Challenges\DSA Challenge 5\Test Folder'
// node .\fo.js tree 'E:\DSA Challenges\DSA Challenge 5\Test Folder'
// node .\fo.js help
// node .\fo.js search 'E:\DSA Challenges\DSA Challenge 5\Test Folder' question.exe