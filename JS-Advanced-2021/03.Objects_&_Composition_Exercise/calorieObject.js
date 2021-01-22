function calorieObject(input) {
    let result = {};
    while(input.length > 0) {
        let food = input.shift();
        let calories = Number(input.shift());
        result[food] = calories;
    }
    console.log(result);
}

calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])