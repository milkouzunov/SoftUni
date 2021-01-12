function needForSpeed(input) {
    let n = input.shift();
    let line = input.shift();
    let cars = {};
    while (line.includes('|')) {
        let [make, km, fuel] = line.split('|');
        km = Number(km);
        fuel = Number(fuel);
        cars[make] = {
            km,
            fuel
        }
        line = input.shift();
    }
    
    while(!line.includes('Stop')){
        let command = line.split(' : ')[0];

       if(command === 'Drive') {
           let [make, km, fuel] = line.split(' : ').slice(1);
           km = Number(km);
           fuel = Number(fuel);
           if(cars[make].fuel >= fuel) {
               cars[make].fuel -= fuel;
               cars[make].km += km;
               console.log(`${make} driven for ${km} kilometers. ${fuel} liters of fuel consumed.`);
           } else {
               console.log(`Not enough fuel to make that ride`);
           }
           if(cars[make].km >= 100000) {
               console.log(`Time to sell the ${make}!`);
               delete cars[make];
           }
       } else if(command === 'Refuel') {
           let make = line.split(' : ')[1];
           let fuel = Number(line.split(' : ')[2]);
           let refuel;
           if(cars[make].fuel + fuel > 75) {
                refuel = 75 - cars[make].fuel;
           } else {
               refuel = fuel;
           }
           cars[make].fuel += refuel;
           console.log(`${make} refueled with ${refuel} liters`);
       } else if(command === 'Revert') {
            let make = line.split(' : ')[1];
            let km = Number(line.split(' : ')[2]);
            cars[make].km -= km;
            console.log(`${make} mileage decreased by ${km} kilometers`);
            if(cars[make].km < 10000) {
                cars[make].km = 10000;
            }
       }


        line = input.shift();
    }
    Object.entries(cars).sort((a,b) => b[1].km - a[1].km || a[0].localeCompare(b[0])).forEach(car => {
        console.log(`${car[0]} -> Mileage: ${car[1].km} kms, Fuel in the tank: ${car[1].fuel} lt.`);
    });
}

needForSpeed([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
  ]
  
  )