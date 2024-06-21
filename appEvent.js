const EventEmmiter = require('events');

const productIssuer = new EventEmmiter();

productIssuer.on('purchase', (money,num) => {
    console.log(`a purchase has been made by $${money}.\n`
        +`Number of items purchased: ${num}.`
    );
})

productIssuer.emit('purchase', 500,5);