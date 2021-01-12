function store(stock, ordered) {
    let shop = {};

    for (let i = 0; i < stock.length; i+=2) {
        const element = stock[i];
        shop[element] = Number(stock[i+1]);

    }
    for (let j = 0; j < ordered.length; j+=2) {
        const element = ordered[j];
        if(!shop.hasOwnProperty(element)){
            shop[element] = 0;
        }
            shop[element] += Number(ordered[j+1]);
        

    }

    Object.keys(shop).forEach(key => {
        console.log(`${key} -> ${shop[key]}`);
    })
}


store([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
    )




    // let filteredProducts = currentStock.filter(x => x+1 % 2 === 0)
    // let filteredQuantity = currentStock.filter(x => (x+1) % 2 === 1)
    // console.log(filteredQuantity);
    // console.log(filteredProducts);

    // for (let i = 0; i < currentStock.length; i+=2) {
    //     let product = currentStock[i];
    //     let quantity = Number(currentStock[i+1]);
    // }