function passwordReset(input) {
    let password = input.shift();
    let line = input.shift();

    while(!line.includes('Done')) {
        if(line.includes('TakeOdd')){
            password = password.split('').filter((el,i) => i % 2 !== 0).join('');
            console.log(password);
        } else if(line.includes('Cut')) {
            let startIndex = line.split(' ')[1];
            let length = line.split(' ')[2]
            password = password.replace(password.substr(startIndex,length),'')
            console.log(password);
        } else if(line.includes('Substitute')) {
            if(password.includes(line.split(' ')[1])) {
                let searchSubstr = new RegExp(line.split(' ')[1], 'g');
                let replaceSubstr = line.split(' ')[2]
                password = password.replace(searchSubstr,replaceSubstr);
                console.log(password);
            } else {
                console.log(`Nothing to replace!`);
            }
        }
        line = input.shift();
    }
    console.log(`Your password is: ${password}`);
}

passwordReset([
    'up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy',
    'TakeOdd',
    'Cut 18 2',
    'Substitute ! ***',
    'Substitute ? .!.',
    'Done'
  ])