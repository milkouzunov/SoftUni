function fullNames(input){
    let regex = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
    let validNames = [];
    let validName;
    while((validName = regex.exec(input)) !== null) {
        validNames.push(validName[0])
    }
    console.log(validNames.join(' '));
}