function phoneBook(input) {
    let contacts = {};
    for (let line of input) {
        let [name, phNumber] = line.split(' ');      
        contacts[name] = phNumber;
    }
    for (let key in contacts) {
        console.log(`${key} -> ${contacts[key]}`);
    }
}

phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']
)