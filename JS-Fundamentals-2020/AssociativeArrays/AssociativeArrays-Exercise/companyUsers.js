function companyUsers(input){
    let companies = {};

    for (let line of input) {
        let [companyName, employeeId] = line.split(' -> ');

        if(!companies.hasOwnProperty(companyName)){
           companies[companyName] = [];
        }
        if(!companies[companyName].includes(employeeId))
        companies[companyName].push(employeeId);
    }

    Object.entries(companies).sort((a,b) => a[0].localeCompare(b[0])).forEach(kvp => {
        console.log(`${kvp[0]}`);
        kvp[1].forEach(employeeId => console.log(`-- ${employeeId}`));
        
    });
}

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
    ]
    
    )