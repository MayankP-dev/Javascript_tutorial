// singleton

// object literals
Object.create //called constructor method, singleton is created here 

const mySym = Symbol("key1")

const JsUser = {
    name: "Mayank", 
    [mySym]: "mySymbol",
    age: 20,
    location: "Noida",
    email: "mayank@gigggit.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]); //better to access objects keys like this 
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js User");
    
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`);
    
}
// console.log(JsUser.greeting); //returns Function(anonymous)
// console.log(JsUser.greeting());

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());





