function tickets(data, sortingCriterion) {
    let result = [];
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }
    let line = data.shift();
    while (line) {
        let [destination, price, status] = line.split('|');
        price = Number(Number(price).toFixed(2));
        result.push(new Ticket(destination,price,status));
        line = data.shift();
    }
    if(sortingCriterion === 'price') {
        return result.sort((a,b) => a[sortingCriterion] -b[sortingCriterion]);
    } else {
        return result.sort((a,b) => a[sortingCriterion].localeCompare(b[sortingCriterion]));
    }
    
}

console.log(tickets(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'price'

))


let expectedArray = [{destination: 'Philadelphia', price: 94.2, status: 'available'},
    {destination: 'New York City', price: 95.99, status: 'available'},
    {destination: 'Boston', price: 126.2, status: 'available'},
    {destination: 'Chicago', price: 140.2, status: 'available'},
    {destination: 'Philadelphia', price: 132.2, status: 'departed'},
    {destination: 'New York City', price: 240.2, status: 'departed'},
    {destination: 'New York City', price: 305.2, status: 'departed'},
    {destination: 'New York City', price: 95.99, status: 'sold'},
    {destination: 'Dallas', price: 144.6, status: 'sold'},
    {destination: 'New York City', price: 206.2, status: 'sold'}];