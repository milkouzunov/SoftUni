function storage(input) {
    let storage = new Map();

    for (let line of input) {
        let [item, quantity] = line.split(' ');
        quantity = Number(quantity);

        if(storage.has(item)) {
            storage.set(item,(storage.get(item) + quantity));
        } else {
            storage.set(item, quantity);
        }
    }
    let entries = Array.from(storage);
    
    for (let kvp of entries) {
        console.log(`${kvp[0]} -> ${kvp[1]}`);
    }
}

storage(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']
)