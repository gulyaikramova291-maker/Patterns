const Order = require('./Order');

class OrderDecorator extends Order {
    constructor(order) {
        super();
        this.order = order;
    }

    getDescription() {
        return this.order.getDescription();
    }

    getPrice() {
        return this.order.getPrice();
    }
}

module.exports = OrderDecorator;
