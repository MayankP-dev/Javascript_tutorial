/* #Primitive data type
        7 types: String(call by value), Number,       Boolean, null. undefined, Symbol, BigInt

    const score =100
    const scoreValue = 100.3
    const isLoggedIn = False
    const outsideTemp = null
    let userEmail; 
    const id = Symbol('123')
    const anotherId = Symbol('123')

    # Reference type(non-primitiyve)
        Array, Objects, Functions
*/


// Memory - Stack(primititve datatype), Heap(non-primititve datatype)

let myName = "maks"
let anotherName = myName
anotherName = "Mayank"
console.log(anotherName); //prints Mayank
console.log(myName); //prints maks



