function solve(input) {
    let arr = input.shift().split('|').filter(word => word !== '').map(x => x.trim());
    let line = input.shift();
    let result = [];
    while(line) {
        let [town, latitude, longitude] = line.split('|').filter(word => word !== '').map(x => x.trim());
        latitude = Number(Number(latitude).toFixed(2));
        longitude = Number(Number(longitude).toFixed(2));
        result.push({
            [arr[0]] : town,
            [arr[1]] : latitude,
            [arr[2]] : longitude,
        });
        line = input.shift();
    }
    console.log(JSON.stringify(result));
}

solve(['| Town | Latitude | Longitude |',
    '| Random Town | 0.00 | 0.00 |']
)