function race(input) {
    let inputRacers = input.shift().split(', ');
    let line = input.shift();
    let finalRacers = {};
    while(!line.includes('end')) {
        let name = line.match(/[A-Za-z]/g).join('');
        let distance = (line.match(/\d/g)).map(Number).reduce((acc, a) => acc + a, 0)
        
        if(inputRacers.includes(name) && !finalRacers.hasOwnProperty(name)) {
            finalRacers[name] = distance;
        } else if(finalRacers.hasOwnProperty(name)){
            finalRacers[name] += distance;
        }

        line = input.shift();
    }
    
    Object.entries(finalRacers).sort((a,b) => b[1] - a[1]).forEach((racer, index) => {
        if(index + 1 === 1) {
            console.log(`${index+1}st place: ${racer[0]}`);
        }else if(index + 1 === 2) {
            console.log(`${index+1}nd place: ${racer[0]}`)
        } else if(index + 1 === 3) {
            console.log(`${index+1}rd place: ${racer[0]}`)
        }
    });
}

race([
    'George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'
  ]
  )