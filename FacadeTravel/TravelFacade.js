
const FlightBooking = require('./FlightBooking');
const HotelBooking = require('./HotelBooking');
const Payment = require('./Payment');

class TravelFacade {
    constructor() {
        this.flight = new FlightBooking();
        this.hotel = new HotelBooking();
        this.payment = new Payment();
    }

    bookTrip() {
        console.log('=== Booking Travel ===');

        this.flight.bookFlight();
        this.hotel.bookHotel();
        this.payment.makePayment();

        console.log('Travel booked successfully!');
    }

    cancelTrip() {
        console.log('=== Cancelling Travel ===');

        this.flight.cancelFlight();
        this.hotel.cancelHotel();
        this.payment.refundPayment();

        console.log('Travel cancelled successfully!');
    }
}

module.exports = TravelFacade
