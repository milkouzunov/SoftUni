function nationalCourt(input) {
    let employeeHelpOnHour = Number(input[0]) + Number(input[1]) + Number(input[2]);
    let peoples = Number(input[3]);
    let hourCounter = 0;

    while (peoples > 0) {
        hourCounter += 1;
        peoples -= employeeHelpOnHour;
        if(hourCounter % 4 === 0) {
            hourCounter += 1;
        }
        
    }
    console.log(`Time needed: ${hourCounter}h.`);
}