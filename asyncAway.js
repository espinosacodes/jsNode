function orderProduct(product){
    return new Promise((resolve,reject)=>{
        console.log(`ordering ${product} from the store`);
        setTimeout(()=>{
            if(product == 'TV'){
            resolve('TV is successfully ordered');
            
            }else{
                reject('TV is out of stock');
            }
    
        },2000);
    });
}


function processOrder(answer){
    return new Promise((resolve,reject)=>{
        console.log('Processing order');
        console.log(`The answer is ${answer}`)
        setTimeout(()=>{
            resolve('Order processed successfully /n enjoy your TV');
        },2000);
    });

} 

orderProduct('TV')
    .then(answer => {
        console.log(answer);
        console.log(answer);
        return processOrder(answer);
    })
    .then(processedAnswer => {
        console.log(processedAnswer);
        })
        .catch(error => {
            console.log(error);
        })
    






