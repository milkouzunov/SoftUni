function travelTime(input) {
    let destinations = {};
 
    for (let line of input) {
        let [countryName, townName, price] = line.split(' > ');
 
        if(!destinations.hasOwnProperty(countryName)) {
            destinations[countryName] = {};
        }
        if(!destinations[countryName].hasOwnProperty(townName)){
            destinations[countryName][townName] = {};
            destinations[countryName][townName] = price
 
 
 
        } else if(destinations[countryName][townName] > price){
            destinations[countryName][townName] = price;
        }
    }
    let sortedDestination = [];
    let destinationsEntries = Object.entries(destinations).sort((a,b) => a[0].localeCompare(b[0])).forEach(country => {
        let currentCountry = [];
            currentCountry.push(country[0])
        
       let countryEntries = Object.entries(country[1]).sort((a,b) => a[1] - b[1]).forEach(town => {
            
            currentCountry.push(town);
             
       })
       sortedDestination.push(currentCountry);
    })
    for (let country of sortedDestination) {
        let print = [];
        print.push(`${country[0]} -> `)
        for (let town = 1; town < country.length; town++) {
            print.push(`${country[town][0]} -> ${country[town][1]} `)
        }
        console.log(print.join(''));
    }
}
 
travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sofia > 200",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
 
    ]
    )