function catalogue(array) {
    let products = {};
    for (let line of array) {
        let [product, productPrice] = line.split(' : ');
        products[product] = productPrice;
        
    }
    let keys = Object.keys(products);
    keys.sort((a,b) => a.localeCompare(b));
    let firstLetter = "";
    for (let key of keys) {
        if (firstLetter !== key.charAt(0)) {
            firstLetter = key.charAt(0);
            console.log(firstLetter);
        }
        console.log(`  ${key}: ${products[key]}`);
    }   
}

catalogue(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
)