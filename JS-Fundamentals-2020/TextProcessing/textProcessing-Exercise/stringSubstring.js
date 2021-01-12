function stringSubstring(searchWord, text) {
    let wordLowerCase = searchWord.toLowerCase();
    text = text.toLowerCase();
    
    if(text.split(' ').includes(wordLowerCase)){
        console.log(searchWord);
    } else {
        console.log(`${searchWord} not found!`);
    }
    
}

stringSubstring('javascript',
'JavaScript is the best programming language'
)