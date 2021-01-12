function schoolGrades(input) {
    let students = {};

    for (let line of input) {
        let name = line.split(' ')[0];
        let grades = line.split(' ').splice(1).map(Number);
        if(students[name]){
            students[name] = students[name].concat(grades);
        } else {
            students[name] = grades;
        }
    }
    let entries = Object.entries(students).sort((a,b) => {
        let averageA = a[1].reduce((acc, a) => acc + a, 0) / a[1].length;
        let averageB = b[1].reduce((acc, a) => acc + a, 0) / b[1].length;

        return averageA - averageB;
    });
    for (let kvp of entries) {
        console.log(`${kvp[0]}: ${kvp[1].join(', ')}`);
    }

}

schoolGrades(
['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6'
]
)