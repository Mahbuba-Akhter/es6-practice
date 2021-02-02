// function add(num1,num2) { /*declear a function*/
//     return num1 + num2;   /* returned the function*/
// }
// const total = add(15, 17); /*called the function*/
// console.log(total);

// jodi 1 ta number define na kori tahole

function add(num1,num2 = 20) { /* 20 holo backup jodi function call a 1ta value miss hoy*/
    
    if (num2 == undefined){
        // num2 = num2 || 20; 
    }
    return num1 + num2;
}
const total = add(15, 1);
console.log(total);