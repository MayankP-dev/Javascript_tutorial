const user = {
    username: "mayank",
    price : 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        // this is used to denote current context. 
        console.log(this);
        
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = 'mayank'
//     console.log(this);
//     console.log(this.username);//this will print undefined
    
// }
// chai()

// const chai = function(){
//     let username = 'mayank'
//     console.log(this.username);
//     //this will print undefined
// } 
// chai()
// const chai = () => {
//     let username = 'mayank'
//     console.log(this.username);
//     //using arrow function
// } 
// chai()

// const addTwo = (num1, num2) => {
//     return num1+num2
// }
//explicit return function

const addTwo = (num1, num2) => (num1+num2) //implicit return function, can be written without return

const addTwo = (num1, num2) => ({username: 'hitesh'}) 
console.log((addTwo(3,4)));

