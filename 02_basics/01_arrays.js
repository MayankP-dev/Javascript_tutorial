// arrays

const myArr = [0,1,2,3,4,5]
const Heroes = ['slack','flash', 'lantern']

console.log(myArr[0])

// Array methods

myArr.push(6) //adds value to the end of array, similar to append function
myArr.pop() //removes element from the end of array 

// myArr.unshift(9) //adds element at the start of the array
// myArr.shift() //removes element at the start of the array

// console.log(myArr.includes(9)); //returns boolean value
// console.log(myArr.indexOf(3)); // shows index of specified 

const newArr = myArr.join() // combines the elements of array into a string

// console.log(myArr);

// slice, splice 

console.log(("A", myArr));
// const res_arr = arr1.concat(arr2) // concatenates two arrays into single array, arr1 preceding arr2
const arr = Array.from("Mayank") // converts given string to array
console.log(Array.from({name: "mayank"})); //interesting note

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3)); //converts given variables into a single array




