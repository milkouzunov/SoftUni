function fancyBarcodes(input) {
    let barcodeCount = Number(input.shift());
    let pattern = /\@\#+(?<barcode>[A-Z][A-Za-z0-9]{4,}[A-Z])\@\#+/;

    for (let i = 0; i < barcodeCount; i++) {
        let barcode = input[i];
        let product;
        let validBarcode = barcode.match(pattern);

        if(validBarcode !== null){
           let productPattern = /\d/g;
           let matchProduct = validBarcode[0].match(productPattern);
           if(matchProduct === null){
                product = '00';
           } else {
                product = matchProduct.join('')
           }
           console.log(`Product group: ${product}`);
        }else {
            console.log('Invalid barcode');
        }
    }
}

fancyBarcodes([ '3', '@#FreshFisS@#', '@###Brea0D@###', '@##Che46sE@##' ]

  )