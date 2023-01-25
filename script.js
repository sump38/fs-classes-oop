//global variable
const userName = 'Moshe';
console.log(age); //undefined

setTimeout(() => {
    //local variable
    const age = 99;
    console.log(age); //99


    const userName = 'Yaron';
    console.log(userName);
},1000);

console.log(age); //undefined



