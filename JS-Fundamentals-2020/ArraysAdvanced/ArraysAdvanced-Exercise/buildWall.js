function wallBuild (array){
    let total = 0;
    let newArr = [];
    while(0 < array.length) {
        let oneDay = 0;
        array = array.filter(x => x < 30);
        oneDay = 195 * array.length;
        if(oneDay === 0) {
            break;
        }
        newArr.push(oneDay);
        array = array.map(x => x + 1);
        total += oneDay;
    }
    total *= 1900;
    console.log(newArr.join(', '));
    console.log(total + ' pesos');
}