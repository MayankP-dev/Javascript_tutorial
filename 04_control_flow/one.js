// if

// if(condition){
    
// }

// const isUserLoggedIn = true

// if(2=='2'){
//     console.log("executed");
    
// }

// === -> checks value as well as data type of two elements
// >,<,<=,>=,==,!= 

// const score=200

// if(score>100){
//     const power="fly"
//     console.log(`User power: ${power}`);
    
// }

const balance=1000

// if(balance>500) console.log("test"); //implicit 

// if(balance<500){
//     console.log("less than");
    
// }else if(balance<750){
//     console.log("less than 750");
    
// }else if(balance<900){
//     console.log("less thank 900");
    
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedinFromEmail = true

if(userLoggedIn && debitCard){
    console.log("allow to buy");
    
}

if(loggedInFromGoogle || loggedinFromEmail){
    console.log("user logged in ");
    
}