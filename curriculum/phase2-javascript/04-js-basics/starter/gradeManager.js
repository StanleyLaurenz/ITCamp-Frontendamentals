// ========== TASK 1: Create a student object ==========
// Properties: name (string), age (number), grades (array of numbers)
let student = {
  // your code here
  name: "Bob",
  age: 10,
  grades: [39, 80, 38, 77]
};


// ========== TASK 2: Calculate average grade ==========
// Loop through grades array and return the average
function getAverage(grades) {
  // your code here
  let totGrade = 0
  for (let i = 0; i < grades.length; i++) {
    totGrade += grades[i]
  }
  let avgGrade = totGrade/(grades.length)
  return avgGrade
}


// ========== TASK 3: Get letter grade ==========
// 90+ = "A", 80+ = "B", 70+ = "C", 60+ = "D", below = "F"
function getLetterGrade(average) {
  // your code here (use if/else)
    if (average >= 90){
      return 'A'
    }
    else if (average >= 80){
      return 'B'
    }
    else if (average >= 70){
      return 'C'
    }
    else if (average >= 60){
      return 'D'
    }
    else{
      return 'E'
    }
}


// ========== TASK 4: Check if passed ==========
// Return true if average >= 60 AND no grade below 50
function hasPassed(grades) {
  // your code here (use logical operators)
  let avgGrade = getAverage(grades)
  let pass = true
  for (let i = 0; i < grades.length; i++){
    if (grades[i] < 50){
      pass = false
      break
    }
  }

  if (avgGrade >= 60 && pass){
    return true
  }
  return false
}


// ========== TASK 5: Find highest grade ==========
// Use a while loop to find the highest grade
function getHighest(grades) {
  // your code here
  let highestScore = grades[0]
  let i = 1

  while (i < grades.length){
    if (grades[i] > highestScore){
      highestScore = grades[i]
    }
    i++
  }

  return highestScore
}


// ========== TASK 6: Create 3 students ==========
var students = [
  // add 3 student objects here
  {name: "Alpha", age: 12, grades:[34, 53, 81, 80]},
  {name: "Beta", age: 14 , grades:[83, 81, 80, 50]},
  {name: "Charlie", age: 13, grades:[90, 100, 73, 67]}
];


// ========== TASK 7: Display all results ==========
// Loop through students and console.log a summary for each
for (let i = 0; i < students.length; i++) {
  // your code here
  console.log(`${students[i].name}'s Report
------------------------
Age: ${students[i].age}
Grades: ${students[i].grades}
Highest Score: ${getHighest(students[i].grades)}
Average Grade: ${getAverage(students[i].grades)}
Overall Letter Grade: ${getLetterGrade(getAverage(students[i].grades))}
Pass: ${hasPassed(students[i].grades)}`)
}

// ========= a random function =============
function mathOperation() {
    function findMin() {
        // your code goes here
    }
}