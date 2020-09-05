// You are given an object of student names and grades
// Loop through all the students' grades and console log the name and grade of the ones with grade more than 18
// Try to use both methods shown above to achieve this

const studentGrades = {
  tom: 20,
  george: 17,
  abdul: 19,
};

// Looping through the array created from Object.keys
const studentGradesKeys = Object.keys(studentGrades);

studentGradesKeys.forEach((key) => {
  if (studentGrades[key] > 18) {
    console.log(`${key}: ${studentGrades[key]}`);
  }
});

// Prints
// TOM - 20
// ABDUL - 19
