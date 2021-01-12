function netherRealms(input) {
    let demons = [];
    let splitPattern = /[, ]+/g;
    let hpPattern = /[^0-9\+\-\/\*\.]/g;
    let numbersPattern = /\-*[\d.\d]+/g;
    let multipliersPattern = /[\*\/]/g;
    input = input[0].split(splitPattern)
    
        input.forEach(name => {
          let health = name.match(hpPattern) || []
          health = health.reduce((acc, a) => acc + a.charCodeAt(0), 0);
          let damage = name.match(numbersPattern)|| [] 
          damage = damage.map(Number).reduce((acc, a) => acc + a, 0);
          let multipliers = name.match(multipliersPattern) || []
          multipliers.forEach(el => {
              if(el === '*'){
                    damage *= 2;
              } else {
                    damage /= 2;
               }
            })
            demons.push({
                name,
                health,
                damage
            })
        });
         
          
    
    Object.entries(demons).sort((a,b) => a[1][`name`].localeCompare(b[1][`name`])).forEach(demon => {

        console.log(`${demon[1].name} - ${demon[1].health} health, ${demon[1].damage.toFixed(2)} damage`);
    })
}

netherRealms( [ 'M3ph1st0**,    Azazel' ] );