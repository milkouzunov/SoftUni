function wordOccurrences(text) {
    let words = {};
    let times = 1;
    for (let word of text) {

        if(words.hasOwnProperty(word)) {
            words[word] = (words[word]+1);
        } else {
            words[word] = times;
        }
    }
    let entries = Object.entries(words).sort((a,b) => b[1] - a[1]);
    for (let kvp of entries) {
        console.log(`${kvp[0]} -> ${kvp[1]} times`);
    }
}  

wordOccurrences(["Here", "is", "the", "first", "sentence", 
"Here", "is", "another", "sentence", "And",
"finally", "the", "third", "sentence"])