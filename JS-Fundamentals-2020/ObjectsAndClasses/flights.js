function flights (array){
    let flights = [];
    let cancelledFlights = [];
    for (let flight of array[0]) {     
        let [numFlight, destination] = flight.split(' ');
        let obj = {};
        obj.destination = destination;
        obj.numFlight = numFlight;
        flights.push(obj);
    }
    for (let flight of array[1]) {
        let [flightNum, command] = flight.split(' ')
        for (let i = 0; i < flights.length; i++) {
            if(flights[i].numFlight === flightNum && command === 'Cancelled'){
                let index = flights.indexOf(flights[i]);
                let cancelledFlight = flights.splice(index,1);
                cancelledFlights.push(cancelledFlight[0]);
                break;
            } 
        }
    }
    if(array[2][0] === 'Cancelled'){
        cancelledFlights.forEach(flight => {
            console.log(`{ Destination: '${flight.destination}', Status: 'Cancelled' }`);
        })
    } else {
        flights.forEach(flight => {
            console.log(`{ Destination: '${flight.destination}', Status: 'Ready to fly' }`);
        })
    }
}

flights([['WN269 Delaware',
'FL2269 Oregon',
 'WN498 Las Vegas',
 'WN3145 Ohio',
 'WN612 Alabama',
 'WN4010 New York',
 'WN1173 California',
 'DL2120 Texas',
 'KL5744 Illinois',
 'WN678 Pennsylvania'],
 ['DL2120 Cancelled',
 'WN612 Cancelled',
 'WN1173 Cancelled',
 'SK330 Cancelled'],
 ['Ready to fly']
]

)