function train(input) {
    let wagons = input
    .shift()
    .split(' ')
    .map(Number);
    let maxPassengers = Number(input.shift());
    for (let i = 0; i < input.length; i++) {
        let split = input[i]
        .split(' ');
        let command = split[0];
        let passengers = Number(split[1]);
        if(split.length === 1) {
            passengers = command;
            passengers = Number(passengers);
        }

        for (let i = 0; i < wagons.length; i++) {
            if(command === 'Add') {
                wagons.push(passengers);
                break;
            }else if(wagons[i] === maxPassengers) {
                wagons[i];
            } else if((wagons[i]+passengers) > maxPassengers) {
                
                continue;
            } else {
                wagons[i] += passengers;
                break;
            }
            
        }
    }
    return wagons.join(' ');
}