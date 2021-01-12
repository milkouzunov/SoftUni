function solve (numDayOfWeek) {
    let arrWeek = [`Monday`, `Tuesday`, `Wednesday`,
    `Thursday`, `Friday`, `Saturday`, `Sunday`];
    if(numDayOfWeek <= 7 && numDayOfWeek > 0) {
        console.log(arrWeek[numDayOfWeek-1])
        
    } else {
    console.log(`Invalid day!`)
    }
    
}

solve(5)