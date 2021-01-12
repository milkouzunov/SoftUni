function  pirates(input) {
    let targetTowns = {};
    let line = input.shift();
    while(!line.includes('Sail')) {
        let [townName, population, gold] = line.split('||');
        population = Number(population);
        gold = Number(gold);
        if(!targetTowns.hasOwnProperty(townName)) {
            targetTowns[townName] = {
                population,
                gold
            }
        } else {
            targetTowns[townName].population += population;
            targetTowns[townName].gold += gold;
        }
        line = input.shift();
    }
    line = input.shift();
    while (!line.includes('End')) {
         
        if(line.includes('Prosper')){
            let [type, townName, gold] = line.split('=>');
            gold = Number(gold);
            if(gold < 0) {
                console.log(`Gold added cannot be a negative number!`);
            } else {
                targetTowns[townName].gold += gold;
                console.log(`${gold} gold added to the city treasury. ${townName} now has ${targetTowns[townName].gold} gold.`);
            }
        } else if(line.includes('Plunder')) {
            let [type, townName, peoples, gold] = line.split('=>');
            peoples = Number(peoples);
            gold = Number(gold);
            targetTowns[townName].population -= peoples;
            targetTowns[townName].gold -= gold;
            console.log(`${townName} plundered! ${gold} gold stolen, ${peoples} citizens killed.`);
            if(targetTowns[townName].gold === 0 || targetTowns[townName].population === 0){
                delete targetTowns[townName];
                console.log(`${townName} has been wiped off the map!`);
            }
        }
        line = input.shift();
    }
    let townsLength = Object.keys(targetTowns).length;
    if(townsLength <= 0) {
        console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
    } else {
        console.log(`Ahoy, Captain! There are ${townsLength} wealthy settlements to go to:`);
        Object.entries(targetTowns).sort((a,b) => b[1].gold - a[1].gold || a[0].localeCompare(b[0]))
        .forEach(town => {
            console.log(`${town[0]} -> Population: ${town[1].population} citizens, Gold: ${town[1].gold} kg`);
        });
    }

}

pirates([
    'Nassau||95000||1000',
    'San Juan||930000||1250',
    'Campeche||270000||690',
    'Port Royal||320000||1000',
    'Port Royal||100000||2000',
    'Sail',
    'Prosper=>Port Royal=>-200',
    'Plunder=>Nassau=>94000=>750',
    'Plunder=>Nassau=>1000=>150',
    'Plunder=>Campeche=>150000=>690',
    'End'
  ])