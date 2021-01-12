function nikuldensMeals(input) {
    let guests = {};

    let line = input.shift();
    let countUnlikeMeals = 0;
    while(!line.includes('Stop')) {
        let [com, name, meal] = line.split('-') 

        if(com === 'Like') {
            if(!guests.hasOwnProperty(name)) {
                guests[name] = [];
            }
            if(!guests[name].includes(meal)){
                guests[name].push(meal);
            }
        } else if(com === 'Unlike') {
            if(!guests.hasOwnProperty(name)) {
                console.log(`${name} is not at the party.`);
            } else {
                if(guests[name].includes(meal)) {
                    console.log(`${name} doesn't like the ${meal}.`);
                    guests[name].splice(guests[name].indexOf(meal),1);
                    countUnlikeMeals++;
                } else {
                    console.log(`${name} doesn't have the ${meal} in his/her collection.`);
                }
            }
            
        }
        line = input.shift();
        
    }
    Object.entries(guests).sort((a,b) => b[1].length - a[1].length || a[0].localeCompare(b[0])).forEach(guest => {
        console.log(`${guest[0]}: ${guest[1].join(', ')}`);
    });
    console.log(`Unliked meals: ${countUnlikeMeals}`);
}

nikuldensMeals([
    'Like-Krisi-shrimps',
    'Unlike-Vili-carp',
    'Unlike-Krisi-salad',
    'Unlike-Krisi-shrimps',
    'Stop'
  ])