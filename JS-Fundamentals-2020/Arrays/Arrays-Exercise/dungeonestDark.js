function solve(input) {
    let toString = input.join();
    let x = toString.split('|')

    let health = 100;
    let coins = 0;
    for (let i = 0; i < x.length; i++) {
        let split = x[i].split(' ');
        let room = split[0];
        let score = Number(split[1])
        
        if(room === 'potion') {
            
            let healthWithotPotion = health;
            health += score;
            if(health > 100) {
                let healed = 100;
                healed -= healthWithotPotion;
                health = 100;
                console.log(`You healed for ${healed} hp.`);
                console.log(`Current health: ${health} hp.`);
            } else if(health < 100) {

                console.log(`You healed for ${score} hp.`);
                console.log(`Current health: ${health} hp.`);
            }
        } else if (room === 'chest') {
            coins += score;
            console.log(`You found ${score} coins.`)
        } else {
            health -= score;
            if(health > 0) {
                console.log(`You slayed ${room}.`);
            } else if(health <= 0) {
                console.log(`You died! Killed by ${room}.`);
                console.log(`Best room: ${i + 1}`);
                break;
            }
        }
 
    }
    if(health > 0) {

        console.log(`You've made it!`);
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}