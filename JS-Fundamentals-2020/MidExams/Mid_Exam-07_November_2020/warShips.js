function  solve(input) {
    let pirateShip = input.shift().split('>').map(Number);
    let warShip = input.shift().split('>').map(Number);
    let maxHealth = Number(input.shift());
    let line = input.shift();
    while (!line.includes('Retire')) {
        
        if(line.includes(`Fire`) ){
            let index = Number(line.split(' ')[1]);
            let damage = Number(line.split(' ')[2]);
            if((index >= 0 && index < warShip.length)){
                warShip[index] = Math.max(warShip[index] - damage,0);
            }
            if(warShip[index] === 0){
                console.log("You won! The enemy ship has sunken.");
                break;
            }
        } else if(line.includes(`Defend`)){
            let startIndex = line.split(' ')[1];
            let endIndex = line.split(' ')[2];
            let damage = line.split(' ')[3]
            if(startIndex >= 0 && endIndex < pirateShip.length){
                let isLose = false;
                for (let index = startIndex; index <= endIndex; index++) {
                    pirateShip[index] = Math.max(pirateShip[index] - damage,0);
                    if (pirateShip[index] === 0) {
                        console.log("You lost! The pirate ship has sunken.");
                        isLose = true;
                        break;
                    }   
                }
                if(isLose){
                    break;
                }
            }
        } else if(line.includes('Repair')){
            let index = Number(line.split(' ')[1]);
            let health = Number(line.split(' ')[2]);
            if((index >= 0 && index < pirateShip.length)){
                pirateShip[index] = Math.min(pirateShip[index] + health,maxHealth);
            }
        } else if(line.includes('Status')) {
            let counter = 0;
            for (let section of pirateShip) {
                let health = maxHealth - (maxHealth * 0.80);
                if(section < health){
                    counter++
                }
            }
            console.log(`${counter} sections need repair.`);    
        }
        line = input.shift();
    }
    if(line === 'Retire'){
        let pirateShipSum = pirateShip.reduce((acc,a) => acc + a,0)
        let warshipSum = warShip.reduce((acc,a) => acc + a,0)
        console.log(`Pirate ship status: ${pirateShipSum}`);
        console.log(`Warship status: ${warshipSum}`);
    }
}

solve(["2>3>4>5>2",
"6>7>8>9>10>11",
"20",
"Status",
"Fire 2 3",
"Defend 0 4 11",
"Repair 3 18",
"Retire"])

