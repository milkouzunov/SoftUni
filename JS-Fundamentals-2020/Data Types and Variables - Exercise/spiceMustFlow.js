function solve (extraction) {
    let totalDayExtraction = 0;
    let totalExtraction = 0;
    let day = 0;
    for(let i = extraction; i >= 100; i -= 10) {
        totalDayExtraction = i;
        day++;
        totalDayExtraction -= 26;
        totalExtraction += totalDayExtraction;
    }
    totalExtraction -= 26;
    console.log(day);
    console.log(totalExtraction);
}

solve(111)