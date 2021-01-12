function employees(arrayOfNames) {
    class Personal {
        constructor (name, personalNumber) {
            this.name = name;
            this.personalNumber = personalNumber;
        }

        info() {
            console.log(`Name: ${this.name} -- Personal Number: ${this.personalNumber}`);
        }
    }

    for (let name of arrayOfNames) {
        let nameLength = name.split('').length
        let employe = new Personal(name,nameLength);
         
        employe.info();
    }
}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]);