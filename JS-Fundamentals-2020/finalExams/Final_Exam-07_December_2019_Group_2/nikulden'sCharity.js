function nikuldensCharity(input) {
    let manString = input.shift();
    let line = input.shift();
    while(!line.includes(`Finish`)) {
        let command = line.split(' ')[0];
        let data = line.split(' ').slice(1);

        switch(command) {
            case 'Replace' : replace(data);
            break;
            case 'Cut' : cut(data);
            break;  
            case 'Make' : make(data);
            break;
            case 'Check' : check(data);
            break;
            case 'Sum' : sum(data);
            break;
        }
        line = input.shift();
    }

    function replace(input) {
        let [oldChar, newChar] = input;
        let pattern = new RegExp(oldChar, 'g');
        manString = manString.replace(pattern,newChar);
        console.log(manString);       
    }
    function cut(input) {
        let startIndex = Number(input[0]);
        let endIndex = Number(input[1]);
        if(startIndex >= 0 && endIndex < manString.length) {
            manString = manString.substring(0,startIndex) + manString.substring(endIndex+1);
            console.log(manString);
        } else {
            console.log(`Invalid indexes!`);
        }
    }
    function make([input]) {
        
        if(input === 'Upper') {
            manString = manString.toUpperCase();
        } else if(input === 'Lower') {
            manString = manString.toLowerCase();
        }
        console.log(manString);
    }
    function check(input) {
        if(manString.includes(input)) {
            console.log(`Message contains ${input}`);
        } else {
            console.log(`Message doesn't contain ${input}`);
        }
    }
    function sum(input) {
        let startIndex = Number(input[0]);
        let endIndex = Number(input[1]);
        if(startIndex >= 0 && endIndex < manString.length) {
            let sum = manString.substring(startIndex,endIndex+1).split('').reduce((acc,a) => acc + a.charCodeAt(0),0)
            console.log(sum);
        } else {
            console.log('Invalid indexes!');
        }

    }
}

nikuldensCharity([
    'ILikeSharan',
    'Replace a e',
    'Make Upper',
    'Check SHEREN',
    'Sum 1 4',
    'Cut 1 4',
    'Finish'
  ]
  );