const BasicOrder = require('./BasicOrder');
const GiftWrapDecorator = require('./GiftWrapDecorator');
const ExpressDeliveryDecorator = require('./ExpressDeliveryDecorator');

// Oddiy buyurtma
let order = new BasicOrder();

console.log('Order:', order.getDescription());
console.log('Price:', order.getPrice());

// Sovg'a qadoqlash qo'shamiz
order = new GiftWrapDecorator(order);

// Tezkor yetkazib berish qo'shamiz
order = new ExpressDeliveryDecorator(order);

console.log('--------------------');
console.log('Order:', order.getDescription());
console.log('Price:', order.getPrice(), 'sum');