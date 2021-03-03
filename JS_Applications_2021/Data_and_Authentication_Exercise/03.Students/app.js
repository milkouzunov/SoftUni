async function getStudents() {
    const url = `http://localhost:3030/jsonstore/collections/students`;

    const response = await fetch(url);
    const data = await response.json();
    document.querySelector('#results tbody').innerHTML = '';
    Object.values(data).forEach(student => {
        let row = document.createElement('tr');

        let firstName = document.createElement('td');
        firstName.textContent = student.firstName;
        row.appendChild(firstName);

        let lastName = document.createElement('td');
        lastName.textContent = student.lastName;
        row.appendChild(lastName);

        let facultyNumber = document.createElement('td');
        facultyNumber.textContent = student.facultyNumber;
        row.appendChild(facultyNumber);

        let grade = document.createElement('td');
        grade.textContent = student.grade;
        row.appendChild(grade)

        document.querySelector('#results tbody').appendChild(row)
    });
}

getStudents();

document.getElementById('form').addEventListener('submit', createStudent);

async function createStudent(ev) {
    ev.preventDefault();

    const formData = new FormData(ev.target);
     
    let firstName = formData.get('firstName');
    let lastName = formData.get('lastName');
    let facultyNumber = formData.get('facultyNumber');
    let grade = formData.get('grade');
   
    if(firstName !== '' && lastName !== '' && facultyNumber !== '' && grade !== '') {
        const url = 'http://localhost:3030/jsonstore/collections/students';

        await fetch(url, {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({firstName,lastName,facultyNumber,grade})
        })
    }
    getStudents()
}