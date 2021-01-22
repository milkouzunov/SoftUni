function wordsUppercase(string) {
    let pattern = /[ ,.!?(  )][ ]*/g
    let words = string.split(pattern);
    let upperCaseWords = [];
    for (let word of words) {
        if(word === '') {
            continue;
        } else {
            upperCaseWords.push(word.toUpperCase());
        }
    }
    console.log(upperCaseWords.join(', '));
}
wordsUppercase('Hi, how are you?')