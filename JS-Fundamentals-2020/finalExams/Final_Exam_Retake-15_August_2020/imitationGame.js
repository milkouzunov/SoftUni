function imitationGame(input) {
    let encryptedMessage = input.shift();
    let line = input.shift();

    while(!line.includes('Decode')) {
        let command = line.split('|')[0];

        if(command === 'Move') {
            let nLetters = Number(line.split('|')[1]);
            encryptedMessage = encryptedMessage.substring(nLetters) + encryptedMessage.substring(0,nLetters)

        } else if(command === 'Insert') {
            let index = Number(line.split('|')[1]);
            let value = line.split('|')[2];
            encryptedMessage = encryptedMessage.substring(0,index) + value + encryptedMessage.substring(index)
        } else if(command === 'ChangeAll') {
            let letter = line.split('|')[1]
            while(encryptedMessage.includes(letter)){
                encryptedMessage = encryptedMessage.replace(letter, line.split('|')[2]);
            }
        }
        line = input.shift();
    }
    console.log(`The decrypted message is: ${encryptedMessage}`);
}

imitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode'
  ]
  )