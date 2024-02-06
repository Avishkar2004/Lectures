
//4.callback function :-
//pretend that this response is coming from the server.
const students = [
    {name :'avish', subject:'html'},
    {name :'saurabh', subject:'mpsc'}

]
function enrollStudent(student, callback){
    setTimeout(function(){
    students.push(student);
    console.log('student has been enrolled')
    callback();
    },3000)
}

function getStudents(){
    setTimeout(function(){
        let str = "";
        students.forEach(function(student){
            str += `<li> ${student.name} </li>`
        });
        document.getElementById('students').innerHTML = str;
        console.log('student has been fetched')
    },1000)
}
let newStudent = {name:'sunny', subject: 'python'}
enrollStudent(newStudent,getStudents)
getStudents();

/*
3.Async :-
async function abc(){
    let myPromise = new Promise(function(resolve,reject){
        let a = 1
        if(a > 0 ){ //<,>
            resolve('success') //value
        }
        else
        {
            reject('failure') //error
        }
    })

    document.getElementById("myId").innerHTML =await myPromise
}
output : [object promise]

2. Promises :-
function abc(){
    console.log('i am function abc')
}
let myPromise = new Promise(function(resolve,reject){
    let a = 1
    if(a < 0 ){ //<,>
        resolve('success') //value
    }
    else{
        reject('failure') //error
    }
})
myPromise
.then((value)=> console.log(value))
.catch((error)=>console.log(error))


 function abc(){
let a = 5 + 5;
return a
}
function def(b,myFunction){ //myFunction is a local function name
    let c =myFunction() + b
    return c
}
console.log(def(10,abc)) //function call

 => 15
which line will be triggrend first :- line no 9 invoking def function 5, 6,1,2,3,,6,8,9
callback :- Call stack 

2.Callback chaining :-
function xyz(){
    return 3;
}
function abc(myFun1){
let a = myFun1() + 5;
return a
}
function def(b,myFun2,myFun3){ //myFunction is a local function name(function call)
    let c = myFun2(myFun3) + b
    return c
}
console.log(def(10,abc,xyz)) //function call
Q1.which got triggred first => def,abc,xyz
Q2.Which got execute first => xty, abc, def

*/