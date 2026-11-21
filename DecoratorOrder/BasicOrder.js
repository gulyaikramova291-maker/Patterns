
const Order = require('./Order')

class BasicOrder extends Order {
    getDescription() {
        return 'Basic Order'
    }

    getPrice() {
        return 100000
    }
}

module.exports = BasicOrder
