function softUniBar(input) {
    let line = input.shift();
    let totalIncome = 0;
    while(!line.includes('end of shift'))  {
        let name = /%([A-Z][a-z]+)%/.exec(line);
        let product = /<(\w+)>/.exec(line);
        let quantity = /\|(\d+)\|/.exec(line);
        let price = /(\d+\.?\d*)\$/.exec(line);
        line = input.shift();

        if(name && product && quantity && price) {
            let totalPiceOfProduct = Number(quantity[1]) * Number(price[1])
            console.log(`${name[1]}: ${product[1]} - ${totalPiceOfProduct.toFixed(2)}`);
            totalIncome += totalPiceOfProduct;
        }
    }
    console.log(`Total income: ${totalIncome.toFixed(2)}`);
}
softUniBar([
    '%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift'
  ])