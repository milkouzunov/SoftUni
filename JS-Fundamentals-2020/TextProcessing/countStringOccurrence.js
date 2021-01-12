function stringOccurrences(text, searchWord) {
    let count = 0;
    for (const word of text.split(' ')) {
        if(word === searchWord){
            count++;
        }
    }
    console.log(count);
}

stringOccurrences("This is a word and it also is a sentence",
"is"
)