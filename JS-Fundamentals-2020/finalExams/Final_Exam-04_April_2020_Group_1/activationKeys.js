function activationKeys(input) {
    let activationKey = input.shift();
    let line = input.shift();
    while(!line.includes('Generate')) {
       let command = line.split('>>>')[0];
       switch(command) {
           case 'Contains' : contains(activationKey, line);
           break;
           case 'Flip' : flip(activationKey, line);
           break;
           case 'Slice' : slice(activationKey, line);
           break;
       }

        line = input.shift();
    }
    function contains(activateKey, line) {
        let substring = line.split('>>>')[1];
        if(activateKey.includes(substring)) {
            console.log(`${activateKey} contains ${substring}`);
        } else {
            console.log(`Substring not found!`);
        }
    }
    console.log(`Your activation key is: ${activationKey}`);

    function flip(activateKey, line) {
        let [command, startIndex, endIndex] = line.split('>>>').splice(1);
        startIndex = Number(startIndex);
        endIndex = Number(endIndex);
        let range = activateKey.substring(startIndex, endIndex);
        if(command === 'Upper') {
            range = range.toUpperCase();
            activateKey = activateKey.replace(activateKey.substring(startIndex, endIndex), range);
        } else {
            range = range.toLowerCase();
            activateKey = activateKey.replace(activateKey.substring(startIndex, endIndex), range);
        }
        activationKey = activateKey;
        console.log(activationKey);
    }

    function slice(activateKey, line) {
        let startIndex = Number(line.split('>>>')[1]);
        let endIndex = Number(line.split('>>>')[2]);
        activateKey = activateKey.replace(activateKey.substring(startIndex, endIndex),'');
        activationKey = activateKey;
        console.log(activationKey);
    }
}

activationKeys([
    '134softsf5ftuni2020rockz42',
    'Slice>>>3>>>7',
    'Contains>>>-rock',
    'Contains>>>-uni-',
    'Contains>>>-rocks',
    'Flip>>>Upper>>>2>>>8',
    'Flip>>>Lower>>>5>>>11',
    'Generate'
  ])