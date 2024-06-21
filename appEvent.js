const EventEmmiter = require('events');

const productIssuer = new EventEmmiter();

productIssuer.on('purchase', (money) => {
    console.log(`a purchase has been made by $${money}.`);
})

productIssuer.emit('purchase', 500);