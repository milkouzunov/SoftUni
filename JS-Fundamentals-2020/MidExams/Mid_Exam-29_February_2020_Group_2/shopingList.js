function shoppingList(input) {
    let products = input.shift().split('!');

    let line = input.shift();

    while(input.length > 0) {
        let [command, product, newProduct] = line.split(' ');

        if(command === 'Urgent' && !products.includes(product)){
            products.unshift(product);
        } else if(command === `Unnecessary` && products.includes(product)) {
            products.splice(products.indexOf(product),1)
        } else if(command === 'Correct' && products.includes(product)) {
            let index = products.indexOf(product);
            products.splice(index, 1);
            products.splice(index, 0, newProduct)
        } else if(command === 'Rearrange' && products.includes(product)) {
            product = products.splice(products.indexOf(product),1);
            products.push(product);
        }
        line = input.shift();
    }
    console.log(products.join(', '));
}

shoppingList([
    'Milk!Pepper!Salt!Water!Banana',
    'Urgent Salt',
    'Unnecessary Grapes ',
    'Correct Pepper Onion',
    'Rearrange Grapes',
    'Correct Tomatoes Potatoes',
    'Go Shopping!'
  ]
  )