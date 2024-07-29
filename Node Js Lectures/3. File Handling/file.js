const fs  = require("fs")


//Sync...
// fs.writeFileSync('./text.txt', "hey There")

//Async...
// fs.writeFile('./text.txt', "hey ", (err) => {})


//Create contact.txt file manually first before running this code
//How to read File ?
// const result = fs.readFileSync("./contact.txt", "utf-8")
// console.log(result)


// fs.readFile("./contact.txt", "utf-8", (err, res) => {
//     if(err) {
//         console.log("Error", err )
//     } else {
//         console.log(res)
//     }
// })


// AppendFile :-

// fs.appendFileSync("./text.txt", new Date().getDate().toLocaleString());

fs.appendFileSync("./text.txt", `${Date.now()} Hey There\n`); 
// 251716613467411 Hey There
// 1716613468136 Hey There
// 1716613479849 Hey There


// Copy File
// fs.cpSync("./text.txt", "./copy.txt") //This will generate copy file


//Delete File
// fs.unlinkSync("./copy.txt") //this command will delete copy.txt file


//Shows the status of file
// console.log(fs.statSync("./text.txt")) 


//make directory(folder)
// fs.mkdirSync("mydocs")

// Folder in folder
// fs.mkdirSync("mydocs/avish", {recursive : true}) 

//! U can't do this in normal js bcoz of security purposes