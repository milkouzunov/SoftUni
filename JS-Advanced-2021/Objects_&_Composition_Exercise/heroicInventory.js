function heroicInventory(input) {
    let heroes = [];

    for (let line of input) {
        let [heroName, level, items] = line.split(' / ');
        level = Number(level);
        if(items) {
            items = items.split(', ');
        } else {
            items = [];
        }
        heroes.push(JSON.stringify({
            name: heroName,
            level: level,
            items: items
        }))
    }
    console.log(`[${heroes.join(',')}]`);
}

heroicInventory(['Isacc / 25',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']
)