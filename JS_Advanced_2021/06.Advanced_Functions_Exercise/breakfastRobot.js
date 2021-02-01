function solution() {
    let macros = {
        protein: 0,
        carbohydrate:0,
        fat: 0,
        flavour:0 
    };
    let recipes = {
        'apple': { carbohydrate: 1, flavour: 2 },
        'lemonade': { carbohydrate: 10, flavour: 20 },
        'burger': { carbohydrate: 5, fat: 7, flavour: 3 },
        'eggs': { protein: 5, fat: 1, flavour: 1 },
        'turkey': { protein: 10, fat: 10, carbohydrate: 10, flavour: 10 },
    };



    return (input) => {
        let [command, par1, par2] = input.split(' ');
        let result = {
            'restock': (microelement, quantity) => {
                macros[microelement] += Number(quantity);
                return 'Success';
            },
            'prepare': (recipe, quantity) => {
                quantity = Number(quantity);
                let success = true;
                for (let macroe in macros) {
                    let isSuccess = macros[macroe] - (recipes[recipe][macroe] * quantity);
                    if(isSuccess < 0){
                        success = false;
                        return `Error: not enough ${macroe} in stock`;
                    } 
                }
                if(success){
                    for (let macroe in macros) {
                        if(recipes[recipe].hasOwnProperty(macroe)){
                            macros[macroe] -= (recipes[recipe][macroe] * quantity);
                        }
                    }
                    return 'Success';
                    
                }
            },
            'report': () => {
                return Object.entries(macros).reduce((acc, c) => acc + `${c[0]}=${c[1]} `, ``).trim();
            }
        }
        return result[command](par1, par2);
    }

}

let manager = solution();
 

var expectationPairs = [
    ['restock protein 100', 'Success'],
    ['restock carbohydrate 100', 'Success'],
    ['restock fat 100', 'Success'],
    ['restock flavour 100', 'Success'],
    ['report', 'protein=100 carbohydrate=100 fat=100 flavour=100'],
    ['prepare apple 2', 'Success'],
    ['report', 'protein=100 carbohydrate=98 fat=100 flavour=96'],
    ['prepare apple 1', 'Success'],
    ['report', 'protein=100 carbohydrate=97 fat=100 flavour=94']
];

for (const value of expectationPairs) {
    let [params, result] = value
    console.log('My result: ' + manager(params));
    console.log('Judge result: ' + result);
}