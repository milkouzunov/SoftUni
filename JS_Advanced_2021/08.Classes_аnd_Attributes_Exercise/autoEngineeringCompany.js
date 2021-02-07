function autoEngineeringCompany(input) {
    let cars = {};

    for (let line of input) {
        let [make, model, producedCars] = line.split(' | ');

        if(!cars.hasOwnProperty(make)){
            cars[make] = {
                [model]: Number(producedCars)   
            };
        } else {
            if(!cars[make].hasOwnProperty(model)) {
                cars[make][model] = producedCars;
            } else {
                cars[make][model] += Number(producedCars);
            }
        }
    }
    for (const car in cars) {
        console.log(car);
        for (const model in cars[car]) {
           console.log(`###${model} -> ${cars[car][model]}`);
        }
    }
}

autoEngineeringCompany(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']
)