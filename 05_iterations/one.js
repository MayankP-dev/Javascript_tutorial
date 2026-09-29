// for 

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if(element ==5){
//         console.log(`${element} is best number`);
        
//     }
//     console.log(element);
    
// }

// for (let i = 0; i <= 10; i++) {
//     console.log(`outer loop ${i}`);   
//     for (let j = 0; j <= 10; j++) {
//         // console.log(`inner loop ${j} outer loop ${i}`);
//         console.log(`${i} * ${j} = ${i*j}`);   
//     } 
// }


// break and continue

for (let index = 1; index < 20; index++) {
    
    if(index==5){
        console.log(`detected ${index}`);
        
        break;
    }
    console.log(`value of i is ${index}`);
        
}