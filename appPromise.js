
const fr = false;

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(fr){
            resolve('I have succeeded');
        }else{
            reject('I have failed');
        }



    }, 1000);
})
//😁
const manageFrTrue = (value) => {
    console.log(value);
};

//🥲
const manageFrFalse = (value) => {
    console.log(value);
};

myPromise.then(manageFrTrue, manageFrFalse);