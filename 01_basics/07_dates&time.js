//Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());


let myCreatedDate = new Date(2026,2,26)
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleDateString());

let myTimeStamp = Date.now() 
// console.log(myTimeStamp); 
// console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000)); //prints date along with seconds




