function worldTour(input) {
    let allStops = input.shift();
    let line = input.shift();

    while(!line.includes(`Travel`)) {
        let command = line.split(':')[0];

        if(command === 'Add Stop') {
            let index = Number(line.split(':')[1]);
            let stop = line.split(':')[2];
            if(allStops[index] !== undefined) {
                allStops = allStops.substring(0,index) + stop + allStops.substring(index);
                console.log(allStops);
            } 
        } else if(command === 'Remove Stop') {
            let startIndex = Number(line.split(':')[1]);
            let endIndex = Number(line.split(':')[2]);
            if(startIndex >= 0 && endIndex < allStops.length){
                allStops = allStops.substring(0,startIndex) + allStops.substring(endIndex+1);
            }
            console.log(allStops);
        } else if(command === 'Switch') {
            let oldString = line.split(':')[1];
            let newString = line.split(':')[2];
            let pattern = new RegExp(oldString, 'g');
            allStops = allStops.replace(pattern, newString);
            
            console.log(allStops);
        }

        line = input.shift();
    }
    console.log(`Ready for world tour! Planned stops: ${allStops}`);
}

worldTour([
    'Hawai::Cyprys-Greece',
    'Add Stop:7:Rome',
    'Remove Stop:11:16',
    'Switch:Hawai:Bulgaria',
    'Travel'
  ])