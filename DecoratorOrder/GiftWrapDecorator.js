
const OrderDecorator = require('./OrderDecorator');

class GiftWrapDecorator extends OrderDecorator {
    getDescription() {
        return this.order.getDescription() + ' + Gift Wrap';
    }

    getPrice() {
        return this.order.getPrice() + 15000;
    }
}

module.exports = GiftWrapDecorator;
