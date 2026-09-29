// const tinderUser = new Object() //empty object 
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Peter"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "peter",
            lastname: "parker"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname); //nested objects can accessed like this 

const obj1= {1:"a", 2: "b"}
const obj2= {3:"a", 2: "b"}
// const obj3 = {obj1,obj2}


// console.log(obj3);

const course = {
    coursename: "js tutorial",
    price: "1000",
    courseInstructor: "tutor"
}

const {courseInstructor: instructor} = course
// console.log(courseInstructor);
// console.log(instructor);

/* JSON API intro */
// how to write JSON
// {
//     "any": "mayank",
//     "coursename": "js tutorial",
//     "price": 9999999,
// }




