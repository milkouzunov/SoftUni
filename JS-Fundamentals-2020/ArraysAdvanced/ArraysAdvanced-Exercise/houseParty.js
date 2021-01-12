function houseParty(array) {
    let guests = [];

    for (let guest of array) {
        let name = guest.split(' ')[0];
        if(guest.includes('is going')) {
            if(guests.includes(name)) {
                console.log(`${name} is already in the list!`);
            } else {
                guests.push(name);
            }
        } else {
            if(!guests.includes(name)) {
                console.log(`${name} is not in the list!`);
            } else {
                let nameIndex = guests.indexOf(name);
                guests.splice(nameIndex,1);
            }
        }
    }
    return guests.join('\n');
}

console.log(houseParty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']
));
