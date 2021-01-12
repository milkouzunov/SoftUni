function aMinerTask(input) {
    let resources = {};
    for (let i = 0; i < input.length; i+=2) {
        let resource = input[i];
        let quantity = Number(input[i+1]);
        if(!resources.hasOwnProperty(resource)){
            resources[resource] = quantity;
        } else {
            resources[resource] += quantity;
        }
    }

    Object.entries(resources).forEach(resource => {
        console.log(`${resource[0]} -> ${resource[1]}`);
    });
}

aMinerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
    ]
    )