function inventory(array) {
    
    let heroes = []; 
    for (let i = 0; i < array.length; i++) {
        let [name, level, items] = array [i].split(' / ');
        level = Number(level);
        items = items.split(', ').sort((a,b) => a.localeCompare(b)).join(', ')
        let hero = {
            name,
            level,
            items
        }
        heroes.push(hero);
    }
    heroes.sort((a,b) => a.level - b.level);
    heroes.forEach(hero => {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    });
}
inventory([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
    ]
    )