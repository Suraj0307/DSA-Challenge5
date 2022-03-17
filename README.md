# DSA-Challenge5
#### This is a very interesting project on Data Structures and Algorithms
Design an algorithm that can search, sort all sorts of file formats, as well as separate various file formats in your system by category and create folders for different file formats to store them.
### Watch this for complete tutorial https://www.youtube.com/watch?v=BsnWubbDVqs

### Prerequisites:
1) You must have node js in your system
2) Download vscode and install it properly
3) Above mentioned two process are very easy u can find them on youtube.
### Main datastructure i have used is hashmap,recursion etc.

# File Structure
1) Test Folder -- It contains all the files in which we are going to perform merge,sort,organize and search operations.
2) commands Folder -- This is the main folder it contains all the operations like help,organize,search,tree.
3) fo.js -- Stands for file ortganizer ,you have to use this file to invoke operations like help organize,search,tree.

#### To use it
Run fo.js in vscode. just like this shown below
![image](https://user-images.githubusercontent.com/90147205/158072877-e46b9986-4d40-4024-83c9-fe32831f116a.png)

the terminal will be opened just like this.
![image](https://user-images.githubusercontent.com/90147205/158072893-64d8cba8-8ccd-4bb5-8006-131b5b56da22.png)

and wait there and look below for the function you want to use.


#### Types of functions it does:
### 1) Separate file formats:
Suppose you have a folder in which there are multiple files with different types of file formats.
Now this function will separate   
media: ["mp4", "mkv", "mp3", "png"],
archives: ["zip", "7z", "rar", "tar", "gz", "ar", "iso", "xz"],
documents: ["docx", "doc", "pdf", "xlsx","xls", "odt", "ods", "odp", "odg","odf","txt", "ps", "tex","cpp" ],
app: ["exe", "dmg", "pkg", "deb"],
It will create media folder and place all media files inside it and same for archives,documents and app.

For using it write this inside terminal
![image](https://user-images.githubusercontent.com/90147205/158072939-9de49670-10f9-4e44-91b3-af2963b633a0.png)


#### node fo.js organize dirname
dirname should be like this 'E:\DSA Challenges\DSA Challenge 5\Test Folder'
Here Test Folder is the folder which contains all the files to be organized.

### 2) Search file in the folder or inside folders folders or anything.
Suppose you have a file and you want to search for it in a quickiest manner .To use it you have to again Run fo.js in vscode mentioned just above.
and write this inside the terminal
#### node .\fo.js search 'E:\DSA Challenges\DSA Challenge 5\Test Folder' question.exe
and hit enter after that you will get all the details where it was found.

![image](https://user-images.githubusercontent.com/90147205/158072958-25c77716-c54c-43c5-bc72-8f68835eca0d.png)


Here 
##### 'E:\DSA Challenges\DSA Challenge 5\Test Folder' is the folder location inside you want to search for
##### and question.exe is the file you want to search for it


#### 3)Tree
Its a simple thing actually It will simply the folder structure you have inside a particular folder.

To use this write this inside the terminal
node .\fo.js tree 'E:\DSA Challenges\DSA Challenge 5\Test Folder'

![image](https://user-images.githubusercontent.com/90147205/158073001-e3f16ca2-213a-4094-827f-65fc11df847c.png)

Folder structure will be shown just like this.

![image](https://user-images.githubusercontent.com/90147205/158072788-468aeb60-271f-4a3e-98a0-c0b07924f849.png)

## Feedbacks are always welcome.

 
