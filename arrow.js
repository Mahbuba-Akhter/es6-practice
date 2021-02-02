// function doubleIt(num) {
//     return num * 2
// }
// const doubleIt = function myFun(num) {
//     return num * 2
// }
// ES6 = 1st num means parameter and => arrow means function bodyte jabe and then return korlam parameter ke 2 di multiple kore.
const doubleIt = num => num * 2;
const result = doubleIt(5);
console.log(result);
// multiple parameter hole parameter a 1st bracket () dite hobe and majkane coma , dite hobe
const add = (x, y) => x+ y;
const total = (50 + 70);
console.log(total);

// onek value thakle function return kora lagbe and {} likte hobe
const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}
const result3 = doMath(7, 5);
console.log(result3);

// parameter na thakle
const give5 = () => 5;
const result2 = give5();
console.log(result2);