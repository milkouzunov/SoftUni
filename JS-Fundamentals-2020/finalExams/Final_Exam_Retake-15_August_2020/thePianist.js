function thePianist(input) {
    let nPieces = Number(input.shift());
    let pieces = {};
    for (let i = 0; i < nPieces; i++) {
        let line = input.shift();
        let [piece, composer, key] = line.split('|');
        pieces[piece] = {
            composer,
            key
        }
    }
    let line = input.shift();

    while(!line.includes('Stop')) {
        let command = line.split('|')[0];
        let data = line.split('|').slice(1);

        switch(command) {
            case 'Add' : add(data);
            break;
            case 'Remove' : remove(data);
            break;
            case 'ChangeKey' : changeKey(data);
            break;
        }
        line = input.shift();
    }

    Object.entries(pieces).sort((a,b) => a[0].localeCompare(b[0]) || a[1].composer.localeCompare(b[1].composer))
    .forEach(piece => {
        console.log(`${piece[0]} -> Composer: ${piece[1].composer}, Key: ${piece[1].key}`);
    });

    function add(data) {
        let [piece, composer, key] = data;
        if(!pieces.hasOwnProperty(piece)){
            pieces[piece] = {
                composer,
                key
            }
            console.log(`${piece} by ${composer} in ${key} added to the collection!`);
        } else {
            console.log(`${piece} is already in the collection!`);
        }
    }
    function remove(data) {
        let piece = data;
        if(pieces.hasOwnProperty(piece)){
            delete pieces[piece];
            console.log(`Successfully removed ${piece}!`);
        } else {
            console.log(`Invalid operation! ${piece} does not exist in the collection.`);
        } 
    }
    function changeKey(data) {
        let [piece, newKey] = data;
        if(pieces.hasOwnProperty(piece)) {
            pieces[piece].key = newKey;
            console.log(`Changed the key of ${piece} to ${newKey}!`);
        } else {
            console.log(`Invalid operation! ${piece} does not exist in the collection.`);
        }
    }
}

thePianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'  
  ]
)  