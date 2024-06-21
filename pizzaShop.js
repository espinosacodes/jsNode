const orderStatus = () => {
    return Math.random() < 0.8;
};

const myPizzaOrder = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(orderStatus()){
            resolve('Your pizza is on the way');
        }else{
            reject('Your pizza is not available');
        }
    
    
    }, 1000);
});

const manageOrderSuccess = (orderConfirmed) => {
    console.log(orderConfirmed);
}

const manageOrderFailure = (orderDeclined) => {
    console.log(orderDeclined);
}


myPizzaOrder
    .then((orderConfirmed) => {
        console.log(orderConfirmed);
    })
    .then(null, (orderDeclined) => {
        console.log(orderDeclined);
    });