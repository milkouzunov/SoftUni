function scoringSystem(array) {
    let students = array.shift();
    let lectures = Number(array.shift());
    let totalBonus = Number(array.shift());
    let bestStudent = {
        studentBonus: 0,
        studentAttendance: 0
    };
    for (let studentAttendance of array) {
        studentAttendance = Number(studentAttendance)
        let studentBonus = studentAttendance / lectures * (5 + totalBonus);
        if(bestStudent.studentBonus < studentBonus || bestStudent.studentAttendance < studentAttendance) {
            bestStudent.studentBonus = Math.ceil(studentBonus);
            bestStudent.studentAttendance = studentAttendance;
        }
    }
    console.log(`Max Bonus: ${bestStudent.studentBonus}.`);
    console.log(`The student has attended ${bestStudent.studentAttendance} lectures.`);
}

scoringSystem([
    '10', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18'
  ]
  
  )