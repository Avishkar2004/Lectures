const fs  = require("fs")
const os = require("os")

console.log(os.cpus().length) //12 
//! blocking req
// console.log("first")
// const result = fs.readFileSync("./contact.txt", "utf-8")
// console.log(result)
// console.log("second")

// => first
// Avi :- 2540216352165
// second



//! non- blocking req
console.log("first")
fs.readFile("./contact.txt", "utf-8", (err, result) =>{
    console.log(result)
})
console.log("second")


// => first
// second
// Avi :- 2540216352165