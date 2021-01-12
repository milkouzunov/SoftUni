function neighborhoods(input) {
    let inputNeighborhoods = input.shift().split(', ');
    let neighborhoods = {};

    for (let neighborhood of inputNeighborhoods) {  
        if(!neighborhoods.hasOwnProperty(neighborhood)){
            neighborhoods[neighborhood] = [];
        } 

    }
    for (let line of input) {
        let [street, personName] = line.split(' - ');
        if(neighborhoods.hasOwnProperty(street)) {
            neighborhoods[street].push(personName);
        }
    }
    let entries = Object.entries(neighborhoods).sort((a,b) => {
        return b[1].length - a[1].length;
    })

    for (let kvp of entries) {
        console.log(`${kvp[0]}: ${kvp[1].length}`);
        for (let name of kvp[1]) {
            console.log(`--${name}`);
        }
    }
}
neighborhoods(['Abbey Street, Herald Street, Bright Mews',
'Bright Mews - Garry',
'Bright Mews - Andrea',
'Invalid Street - Tommy',
'Abbey Street - Billy']
)