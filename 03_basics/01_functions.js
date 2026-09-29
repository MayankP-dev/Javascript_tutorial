
// function sayMyName(){
//     console.log("M");
//     console.log("A");
//     console.log("Y");
//     console.log("A");
//     console.log("N");
//     console.log("K");
// }
// sayMyName //this is reference
// sayMyName() //this is execution

// function addTwoNumbers(number1, number2)//this is parameters
//     {console.log(number1 + number2);
    
// }

function addTwoNumbers(number1, number2){
    let result = number1 + number2
    return result
    //nothing will be considered in code after result  
}

const result = addTwoNumbers(2,4)
// console.log("Result: ", result);
 function loginUserMessage(username){
    if(!username){ // "!" acts as boolean check, T/F
        console.log("Please enter a username");
        return //loop will be end here 
    }

    return `${username} just logged in`
 }

//  console.log(loginUserMessage("Mayank"))
//  console.log(loginUserMessage()) //undefired will be returned, value not defined yet

function calculateCartPrice(...num1){
    return num1
    // "..." this is rest/spread operator, used to store multiple unknown parameters. 
}

// console.log(calculateCartPrice(200,400,500));

const user= {
    username: "mayank",
    price: 199
}

function handleObject(anyobject){
    // console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

// handleObject(user)
handleObject({
    username: "Mayank",
    price: 350
})

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
