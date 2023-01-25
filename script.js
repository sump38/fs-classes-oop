//global variable
const userName = 'Moshe';

setTimeout(() => {
    //local variable
    const userName = 'Yaron';
    console.log(userName);
},1000);



