
const OrderDecorator = require('./OrderDecorator');

class ExpressDeliveryDecorator extends OrderDecorator {
    getDescription() {
        return this.order.getDescription() + ' + Express Delivery';
    }

    getPrice() {
        return this.order.getPrice() + 25000;
    }
}

module.exports = ExpressDeliveryDecorator;
