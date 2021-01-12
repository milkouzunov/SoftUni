function heartDelivery(input) {
    let neighborhood = input.shift().split('@').map(Number);
    let line = input.shift();
    let jumpRange = 0;
    while(!line.includes('Love!')) {
        jumpRange += Number(line.split(' ')[1]);
        if(neighborhood[jumpRange] === 0) {
            console.log(`Place ${jumpRange} already had Valentine's day.`);
        }
        if(jumpRange > neighborhood.length - 1) {
            jumpRange = 0;
            if(neighborhood[jumpRange] === 0) {
                console.log(`Place ${jumpRange} already had Valentine's day.`);
            } else {
                neighborhood[jumpRange] -= 2;
                if(neighborhood[jumpRange] === 0) {
                    console.log(`Place ${jumpRange} has Valentine's day.`);
                }
            }
            
        } else if (neighborhood[jumpRange] !== 0) {
            neighborhood[jumpRange] -= 2;
            if(neighborhood[jumpRange] === 0) {
                console.log(`Place ${jumpRange} has Valentine's day.`);
            }
        }
        line = input.shift()  
    }
    let housesCelebrated = 0;
    console.log(`Cupid's last position was ${jumpRange}.`);

    neighborhood.forEach(house => {
        if(house === 0) {
            housesCelebrated++;
        }
    });
    if(housesCelebrated === neighborhood.length) {
        console.log(`Mission was successful.`);
    } else {
        console.log(`Cupid has failed ${neighborhood.length - housesCelebrated} places.`)
    }
}

heartDelivery([
    '2@4@2',  'Jump 2',
    'Jump 2', 'Jump 8',
    'Jump 3', 'Jump 1',
    'Love!'
  ])