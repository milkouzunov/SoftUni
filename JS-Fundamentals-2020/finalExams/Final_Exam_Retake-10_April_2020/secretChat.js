function mirrorWordss(string) {
    let pattern = /([@#])(?<firstWord>[A-Za-z]{3,})\1\1(?<secondWord>[A-Za-z]{3,})\1/g
    let matches = [...string[0].matchAll(pattern)];
    let mirrorWords = [];
    let nWords = matches.length;
    for (let match of matches) {
        if(match.groups.firstWord === (match.groups.secondWord.split('').reverse().join(''))) {
            let result = `${match.groups.firstWord} <=> ${match.groups.secondWord}`
            mirrorWords.push(result);
        }

    }
    if(matches.length > 0){
        console.log(`${nWords} word pairs found!`);
    } else {
        console.log(`No word pairs found!`);
    }
    if(mirrorWords.length > 0) {
        console.log(`The mirror words are:`);
        console.log(mirrorWords.join(', '));
    } else {
        console.log(`No mirror words!`);
    }
}