console.log("2">1);
console.log("02">1);

console.log(null>0); //false, converted null to number to perform comparisons
console.log(null == 0);//false, did not convert null to number in equality, null=empty
console.log(null>=0); //true, converted null to number to perform comparisons
// comparisons and equality work differently in js 
// comparison and equality with undefined will always result to false. 

// === strict check 
console.log("2" === 2); //will not compare, since strict check will compare data type as well. 
// avoid above comparisons usually. 






