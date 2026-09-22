let a = 300
//
if(true){
    let a = 10
    const b = 20
    //this is block scope 
}

//nested function can happen
function one(){
    const username = "mayank"

    function two(){
        const website = "youtube"
        console.log(username);
        
    }
    // console.log(website);

    two()
    
}

// one()

if(true){
    const username = "mayank"
    if(username==="hitesh"){
        const website = " youtube"
        console.log(username+website);
        
    }
    // console.log(website); cannot be accessed outside its scope.
    
}

// console.log(username); cannot be accessed outside its scope. 

/*    interesting note */

function addone(num){
    return num+1
}

addone(5)

const addTwo = function(num){  // expression = function()
    return num+2 
}

addTwo(5)