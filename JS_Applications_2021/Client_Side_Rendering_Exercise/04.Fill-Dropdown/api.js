export async function postItems(data) {
    const response = await fetch('http://localhost:3030/jsonstore/advanced/dropdown', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    });
    if(response.ok != true) {
        console.error(response.statusText);
    }
}


export async function getItems () {
    const data = await (await fetch('http://localhost:3030/jsonstore/advanced/dropdown')).json();
    return data;
}