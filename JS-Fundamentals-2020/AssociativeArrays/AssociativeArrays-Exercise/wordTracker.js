function wordTracher(input) {
    let tracker = {};
    let counter = 0;
    let checkWords = input.shift().split(' ');

    checkWords.forEach(word => {
        tracker[word] = counter;
    })
    for (let word of input) {
        if (tracker.hasOwnProperty(word)) {
            tracker[word] = (tracker[word] + 1);
        }
    }
    let entries = Object.entries(tracker).sort((a, b) => b[1] - a[1]);
    entries.forEach(kvp => {
        console.log(`${kvp[0]} - ${kvp[1]}`);
    });
} 