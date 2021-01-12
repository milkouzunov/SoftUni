function solve(losesBattles, priceHelmet, priceSword, priceShield, priceArmor) {
    let numBrokenHelmet = 0
    let numBrokenSword = 0;
    let numBrokenShield = 0;
    let numBrokenArmor = 0;
    let counterBrokenArmor = 1;
    let bool = true;
    for(let i = 1; i <= losesBattles; i++) {

        if (i % 2 === 0) {
            numBrokenHelmet++;
        } if (i % 3 === 0) {
            numBrokenSword++;
        } if (i % 2 === 0 && i % 3 === 0) {
            if (bool == true){
                bool = false;
                counterBrokenArmor = 0;
            }
            numBrokenShield++;
            counterBrokenArmor++;
        } if (counterBrokenArmor % 2 === 0) {
            numBrokenArmor++;
            bool = true;
            counterBrokenArmor = 1;
        }
    }
        let priceForRepair = (priceHelmet * numBrokenHelmet) + (priceSword * numBrokenSword) 
    + (priceShield * numBrokenShield) + (priceArmor * numBrokenArmor);
    console.log(`Gladiator expenses: ${priceForRepair.toFixed(2)} aureus`);
}

solve(23,
    12.50,
    21.50,
    40,
    200    
    )