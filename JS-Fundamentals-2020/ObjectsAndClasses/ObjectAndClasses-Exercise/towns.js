function  towns(arrayOfTownsInfo) {
    for (let townInfo of arrayOfTownsInfo) {
        let [town, latitude, longitude] = townInfo.split(' | ');
        let info = {
            town,
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longitude).toFixed(2)
        };
        console.log(info);
    }
    
}

towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625'])