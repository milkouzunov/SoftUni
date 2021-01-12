function furniture(input) {
    let index = 0;
    let totalPrice = 0;
    console.log(`Bought furniture: `);
    while(!input[index].includes('Purchase')){
        let validLine = />>(?<name>.+)<<(?<price>[\d]+\.?[\d]*)!(?<quantity>[\d]+)/;
        let line = validLine.exec(input[index]);
           if(line) {
               let sum = Number(line.groups['price']) * Number(line.groups['quantity']);
               totalPrice += sum;
               console.log(line.groups['name']);
           }
        
        index++;
        line = validLine.exec(input[index]);
    }
    console.log(`Total money spend: ${totalPrice.toFixed(2)}`);
}

furniture(['>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase' ])