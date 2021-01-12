function specialWords(text){


    for (let word of text.split(' ')) {
        if(word.startsWith('#') && word.length > 1 && /^[a-zA-Z]/.test(word.substring(1))){
           console.log(word.substring(1));
        }
    }
}

specialWords('Nowadays everyone uses # to tag a #special word in #socialMedia')