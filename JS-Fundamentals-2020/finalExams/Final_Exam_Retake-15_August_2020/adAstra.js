function adAstra([input]) {
    let pattern = /([#|])(?<item>[A-Za-z\s]+)\1(?<date>[\d]{2}\/[\d]{2}\/[\d]{2})\1(?<calories>\d+)\1/g;
    let totalCalories = 0;
    let matches = [...input.matchAll(pattern)];
    matches.forEach(el => {
        totalCalories += Number(el.groups.calories);
    });
    console.log(`You have food to last you for: ${Math.floor(totalCalories / 2000)} days!`);
    for (let m of matches) {
        console.log(`Item: ${m.groups.item}, Best before: ${m.groups.date}, Nutrition: ${m.groups.calories}`);
    }
} 


adAstra([ '$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|' ])