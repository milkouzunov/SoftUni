function heroes(input) {
    let nHeroes = Number(input.shift());
    let heroes = {};
    let maxHealth = 100;
    let maxMana = 200;
    let line;
    for (let i = 0; i < nHeroes; i++) {
        let [heroName, health, mana] = input[i].split(' ');
        health = Math.min(Number(health),maxHealth);
        mana = Math.min(Number(mana),maxMana);
        heroes[heroName] = {
            health,
            mana
        };
    }
    let index = nHeroes;
    line = input[index];
    while(!line.includes('End')) {
       let command = line.split(' ')[0];
       switch(command) {
           case 'CastSpell' : castSpell(line);
           break;
           case 'TakeDamage' : takeDamage(line);
           break;
           case 'Recharge' : recharge(line);
           break;
           case 'Heal' : heal(line);
           break;
       }

        index++;
        line = input[index];
    }
    Object.entries(heroes).sort((a,b) => b[1].health - a[1].health || a[0].localeCompare(b[0])).forEach(hero => {
        console.log(hero[0]);
        console.log(`  HP: ${hero[1].health}`);
        console.log(`  MP: ${hero[1].mana}`);
    });


    function castSpell(line) {
        let [heroName, needMana, spellName] = line.split(' - ').slice(1);
        needMana = Number(needMana);
        if((heroes[heroName].mana - needMana) >= 0) {
            heroes[heroName].mana -= needMana;
            console.log(`${heroName} has successfully cast ${spellName} and now has ${heroes[heroName].mana} MP!`);
        } else {
            console.log(`${heroName} does not have enough MP to cast ${spellName}!`);
        }
    }
    function takeDamage(line) {
        let [heroName, damage, attacker] = line.split(' - ').slice(1);
        if((heroes[heroName].health - damage) > 0) {
            heroes[heroName].health -= damage;
            console.log(`${heroName} was hit for ${damage} HP by ${attacker} and now has ${heroes[heroName].health} HP left!`);
        } else {
            console.log(`${heroName} has been killed by ${attacker}!`);
            delete heroes[heroName];
        }
    }
    function recharge(line) {
        let [heroName, rechargedAmount] = line.split(' - ').slice(1);
        rechargedAmount = Number(rechargedAmount);
        let recoveredAmount;
        if(heroes[heroName].mana + rechargedAmount > maxMana) {
            recoveredAmount = maxMana - heroes[heroName].mana;
        } else {
            recoveredAmount = rechargedAmount;
        }
        heroes[heroName].mana += recoveredAmount;
        console.log(`${heroName} recharged for ${recoveredAmount} MP!`);
    }
    function heal(line) {
        let [heroName, rechargedAmount] = line.split(' - ').slice(1);
        rechargedAmount = Number(rechargedAmount);
        let recoveredAmount;
        if(heroes[heroName].health + rechargedAmount > maxHealth) {
            recoveredAmount = maxHealth - heroes[heroName].health;
        } else {
            recoveredAmount = rechargedAmount;
        }
        heroes[heroName].health += recoveredAmount
        console.log(`${heroName} healed for ${recoveredAmount} HP!`);
    }
}

HeroesOfCodeAndLogicVII([
    '2',
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End'
  ])