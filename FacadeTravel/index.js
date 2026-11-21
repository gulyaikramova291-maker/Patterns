
const TravelFacade = require('./TravelFacade');

const travel = new TravelFacade();
travel.bookTrip();

console.log('------------------------');

travel.cancelTrip();
