function emojiDetector(text) {
    let numbersPattern = /\d/g;
    let emojiPattern = /(::|\*\*)(?<emoji>[A-Z][a-z]{2,})\1/g;
    let numbersMatch = text[0].match(numbersPattern);
    let coolThreshold = numbersMatch.map(Number).reduce((acc, a) => acc * a, 1);
    console.log(`Cool threshold: ${coolThreshold}`);
    let emojiMatch = emojiPattern.exec(text[0]);
    let numberEmoji = 0;
    let coolEmoji = [];

    while (emojiMatch) {
        numberEmoji++;
        let sum = emojiMatch.groups['emoji'].split('').reduce((acc, a) => acc + a.charCodeAt(0), 0)
        if(sum > coolThreshold) {
            coolEmoji.push(emojiMatch[0].trim())
        }
        emojiMatch = emojiPattern.exec(text[0]);
    }

    console.log(`${numberEmoji} emojis found in the text. The cool ones are:`);
    coolEmoji.forEach(emoji => console.log(emoji))
} 