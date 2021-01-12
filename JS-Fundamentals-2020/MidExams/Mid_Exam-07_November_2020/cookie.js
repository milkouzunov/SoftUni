function solve(budget, students, priceOfFlour,priceOfEgg,priceOfApron) {
    let freePackges = 0;
    let sum = 0
    for (let i = 1; i <= students; i++) {

        if(i % 5 === 0){
            freePackges++;
        } 
        
        sum = priceOfApron * (students + Math.ceil(students * 0.2)) + (priceOfEgg * 10) * students + priceOfFlour * (students - freePackges)
        
        
    }
    if(budget >= sum){
        console.log(`Items purchased for ${sum.toFixed(2)}$.`);
    } else {
        console.log(`${(sum - budget).toFixed(2)}$ more needed.`);
    }

    
}

solve(100,
    25,
    4.0,
    1.0,
    6.0)
    