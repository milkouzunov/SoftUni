function  convertToObject(json) {
    let person = JSON.parse(json);
    
    for (let key of Object.keys(person)) {
        console.log(`${key}: ${person[key]}`);
    }
}

let input = '{"name": "George", "age": 40, "town": "Sofia"}';

convertToObject(input);