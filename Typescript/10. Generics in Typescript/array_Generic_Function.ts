// this is how you define generic
// function getSearchProducts<T> 

//one value from that array
function  getSearchProducts<T>(products : T[]):T {
    //! do some database operations
    const myIndex = 3
    return products[myIndex]
}

//this is how u define generic arrow function
// const getMoresearchProducts = <T> (): => {}

const getMoresearchProducts = <T> (products : T[]):T => {
    //! do some database operations
   const myIndex = 3
    return products[myIndex]
}

//! comma means this is generic function
// const getMoresearchProducts = <T ,> (products : T[]):T => {
//     //! do some database operations
//    const myIndex = 3
//     return products[myIndex]
// }

