// const user: (string | number | boolean)[] = [1, "avi"];

//tuple (should be same like tuple) order of array matters in tuple
let tUser: [string , number , boolean]

tUser = ["av", 19, true]

let rgb :[number, number, number]  = [255, 244, 255]


type User = [number, string]
const newUser : User = [112, "avi"]


//wrong with tuple
newUser[1] = "avi.com"

newUser.push(true)