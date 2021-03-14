export async function getItems () {
    const data = await (await fetch('http://localhost:3030/jsonstore/advanced/table')).json();
    return data;
}