function destinationMapper(input) {
    let validDestination = [];
    let pattern = /([\/=])(?<destination>[A-Z][A-Za-z]{2,})\1/g;
    let match = [...input.matchAll(pattern)];
    match.forEach(m => validDestination.push(m.groups.destination))
    console.log(`Destinations: ${validDestination.join(', ')}`);
    let travelPoints = validDestination.reduce((acc, a) => acc + a.length, 0);
    console.log(`Travel Points: ${travelPoints}`);
}

destinationMapper(`==//=Invalid/invalid==i5valid=/I5valid/=i=`)