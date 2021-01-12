function  validatedDate(input) {
    let pattern = /\b(?<day>\d{2})([-.\/])(?<month>[A-z][a-z]{2})\2(?<year>\d{4})\b/g;
    let date = pattern.exec(input);
    
    while(date) {
        console.log(`Day: ${date.groups['day']}, Month: ${date.groups['month']}, Year: ${date.groups['year']}`);

        date = pattern.exec(input);
    }
}

validatedDate("13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016")