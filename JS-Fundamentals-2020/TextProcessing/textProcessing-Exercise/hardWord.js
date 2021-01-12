function hardWords(input) {
    let text = input.shift().split(' ');
    let words = input.shift();
    for (let word = 0; word < text.length; word++) {
        for (let check of words) {
            if((text[word] === text[word].replace(text[word],'_'.repeat(check.length))) 
              && text[word].substring(text[word].length-1) === '_') {
                text[word] = check;
                
            } else if((text[word].substring(0,text[word].length - 1) === text[word].replace(text[word],'_'.repeat(check.length))) 
            && text[word].substring(text[word].length-1) !== '_'){
               let lastChar = text[word].substring(text[word].length-1);
               text[word] = check.concat(lastChar);
            }
        }
    }
    console.log(text.join(' '));
}