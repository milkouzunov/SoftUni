function partyTime(input) {
    let invitedGuests = {
        vip: [],
        regular: []
    };
    let guest = input.shift();

    while (guest !== 'PARTY') {
        let firstCharOfReservNumb = guest.charAt(0);
        if(firstCharOfReservNumb >= '0' && firstCharOfReservNumb <= '9') {
            invitedGuests.vip.push(guest);
        } else {
            invitedGuests.regular.push(guest);
        }

        guest = input.shift();
    }
    for (let guest of input) {
        if(invitedGuests.vip.includes(guest)){
           invitedGuests.vip.splice(invitedGuests.vip.indexOf(guest),1)
        }
        if (invitedGuests.regular.includes(guest)) {
            invitedGuests.regular.splice(invitedGuests.regular.indexOf(guest),1)
        }
    }

    console.log(invitedGuests.vip.length + invitedGuests.regular.length);
    
    invitedGuests.vip.forEach(element => console.log(element));
    invitedGuests.regular.forEach(element => console.log(element));
}
partyTime([
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc',
'tSzE5t0p',
'7IK9Yo0h',
'PARTY',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc'
])
