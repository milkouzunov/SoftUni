function plantDiscovery(input) {
    let nPlants = Number(input.shift());
    let plants = {};
    
    for (let i = 0; i < nPlants; i++) {
        let line = input.shift();
        let [plantName, rarity] = line.split('<->');
        rarity = Number(rarity);
        
        plants[plantName] = {
            rarity,
            rating: []
        }
        
        
    }
    let line = input.shift();
    while(!line.includes('Exhibition')) {
        let command = line.split(': ')[0];
        let info = line.split(': ')[1];
        if(plants.hasOwnProperty(info.split(' - ')[0])){
            switch(command) {
                case 'Rate' : rate(info);
                break;
                case 'Update' : update(info);
                break;
                case 'Reset' : reset(info);
                break;
                default : 'error';
                break;
            }
        } else {
            console.log('error');
        }
        line = input.shift();
    }
    for (let key in plants) {
        let averageRating = 0;
        if(plants[key].rating.length > 0){
            averageRating = plants[key].rating.reduce((acc,a) => acc + a, 0) / plants[key].rating.length;
        }
        plants[key].rating = averageRating;
    }
    console.log(`Plants for the exhibition:`);
    let entries = Object.entries(plants).sort((a,b) => b[1].rarity - a[1].rarity || b[1].rating - a[1].rating)
    for(let plant of entries){
        console.log(`- ${plant[0]}; Rarity: ${plant[1].rarity}; Rating: ${plant[1].rating.toFixed(2)}`);
    }


    function rate(input) {
        let [plantName, rating] = input.split(' - ');
        plants[plantName].rating.push(Number(rating));
    }
    function update(input) {
        let [plantName, rarity] = input.split(' - ');
        plants[plantName].rarity = Number(rarity);
    }
    function reset(input) {
        let plantName = input;
        plants[plantName].rating = [];
    }
}

plantDiscovery([
    '3',
    'Arnoldii<->4',
    'Woodii<->7',
    'Welwitschia<->2',
    'Rate: Woodii - 10',
    'Rate: Welwitschia - 7',
    'Rate: Arnoldii - 3',
    'Rate: Woodii - 5',
    'Update: Woodii - 5',
    'Reset: Arnoldii',
    'Exhibition'
  ])
