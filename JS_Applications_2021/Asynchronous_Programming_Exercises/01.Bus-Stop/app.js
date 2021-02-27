async function getInfo() {
    let stopId = document.getElementById('stopId').value;
    let stopName = document.getElementById('stopName');
    let buses = document.getElementById('buses');
    try {

        let url = 'http://localhost:3030/jsonstore/bus/businfo/' + stopId
        
        let response = await fetch(url);
        let data = await response.json();
        
        stopName.textContent = data.name;
        buses.innerHTML = '';
        Object.entries(data.buses).forEach(([id, time]) => {
            let liElement = document.createElement('li');
            liElement.textContent = `Bus ${id} arrives in ${time} minutes`
            buses.appendChild(liElement);
        });
    } catch(err) {
        stopName.textContent = 'Error';
    }
}