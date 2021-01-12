function piccolo(input) {
    let inParking = {};

    for (let line of input) {
        let [command, carNumber] = line.split(', ');
        if (command === 'IN') {
            inParking[carNumber] = carNumber;
        } else if (command === 'OUT' && inParking.hasOwnProperty(carNumber)) {
            delete inParking[carNumber];
        }
    }
    let keys = Object.keys(inParking).sort((a, b) => a.localeCompare(b))
    if (keys.length > 0) {
        keys.forEach(car => {
            console.log(car);
        })
    } else {
        console.log(`Parking Lot is Empty`);
    }

}