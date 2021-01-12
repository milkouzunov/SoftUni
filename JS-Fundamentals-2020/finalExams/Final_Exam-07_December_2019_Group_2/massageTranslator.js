function massageTranslator(input) {
    let nMessage = input.shift();
    
    for (let i = 0; i < nMessage; i++) {
        let pattern = /!(?<command>[A-Z][a-z]{2,})!:\[(?<massage>[A-Za-z]{8,})\]/;
        let match = input[i].match(pattern);
        if(match) {
            let charsToAscii = match.groups.massage.split('').map(x => x.charCodeAt(0))
            console.log(`${match.groups.command}: ${charsToAscii.join(' ')}`);
        } else {
            console.log(`The message is invalid`);
        }
    }

}

massageTranslator([
    '3',
    '!play!:[TheNewSong]',
    '!Ride!:[Bike]',
    '!Watch!:[LordofTheRings]'
  ])