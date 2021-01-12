function compStore (input) {
    let totalPriceWithoutTax = 0;
    let totalPrice = 0;
    let taxes = 0;
    for (let price of input) {
        
        if(Number(price) > 0){
            price = Number(price);
            totalPriceWithoutTax += price;
        } else if (Number(price) < 0){
            console.log('Invalid price!');
        } else if(price === 'special' && totalPriceWithoutTax > 0){
            taxes = totalPriceWithoutTax - (totalPriceWithoutTax * 0.80);
            totalPrice = (totalPriceWithoutTax + taxes) - ((totalPriceWithoutTax + taxes) * 0.10);
        } else if (price === 'regular' && totalPriceWithoutTax > 0){
            taxes = totalPriceWithoutTax - (totalPriceWithoutTax * 0.80);
            totalPrice = totalPriceWithoutTax + taxes;
        } 
        else if ((price === 'special' || price === 'regular') && totalPriceWithoutTax === 0){
            console.log('Invalid order!');
        }
    }
    if(totalPriceWithoutTax > 0){
        console.log(`Congratulations you've just bought a new computer!`);
        console.log(`Price without taxes: ${totalPriceWithoutTax.toFixed(2)}$`);
        console.log(`Taxes: ${taxes.toFixed(2)}$`);
        console.log('-----------');
        console.log(`Total price: ${totalPrice.toFixed(2)}$`);
    }
}