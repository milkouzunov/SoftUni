function passwordGenerator(input) {
    let concatString = input[0].concat(input[1]).split('');
    let word = input[2].split('');
    
    let index = 0;
    for (let i = 0; i < concatString.length; i++) {
        

        let vowels = ["a", "e", "i", "o", "u"];
    
        for (e of vowels) {
          if (e === concatString[i]) {
              concatString[i] = word[index].toUpperCase();
              index++;
              break;   
            }
        }
        if(i < concatString.length && word.length === index){
            index = 0;
        }
    }
    console.log(`Your generated password is ${concatString.reverse().join('')}`);
}

passwordGenerator([
    'ilovepizza', 'ihatevegetables',
    'orange'
    ])
    