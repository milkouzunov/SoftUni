function carFactory(carParts) {
    let result = {};
    result.model = carParts.model;
    result.engine = {};
    if (carParts.power <= 90) {
        result.engine.power = 90;
        result.engine.volume = 1800;
    } else if (carParts.power <= 120) {
        result.engine.power = 120;
        result.engine.volume = 2400;
    } else if (carParts.power <= 200) {
        result.engine.power = 200;
        result.engine.volume = 3500;
    }
    result.carriage = {
        type: carParts.carriage,
        color: carParts.color,
    }
    if (carParts.wheelsize % 2 === 0) {
        carParts.wheelsize -= 1;
    }
    let wheels = `${carParts.wheelsize} `.toString().repeat(4).split(' ').map(Number);
    result.wheels = wheels.splice(0, 4);


    return result;
}

carFactory({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 }

)