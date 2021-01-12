function theLift(input) {
    let passengers = Number(input.shift());
    let wagons = input[0].split(' ').map(Number);
    let index = 0;
    let isFree = false
    while (wagons.length !== index) {
        while (wagons[index] < 4) {
            if(passengers === 0){
                break;
            }
            wagons[index]++;
            passengers--;
        }
        if(wagons[index] === 4){
            index ++;
            wagons[index];
        } else if (wagons[index] >= 0) {
            break;
        }    
    }
    wagons.find(wagon => {
        if(wagon >= 0 && wagon < 4){
            isFree = true;
        }
    });
    if(isFree){
        console.log(`The lift has empty spots!`);
        console.log(wagons.join(' '));
    } else if(passengers > 0) {
        console.log(`There isn't enough space! ${passengers} people in a queue!`);
        console.log(wagons.join(' '));
    } else if (passengers === 0){
        console.log(wagons.join(' '));
    }
}
 
theLift([
    "20",
    "0 2 0"
   ]
   
   
   
   )