// Object = Properties + Methods

// Properties ------> studentID, Age, lastName
// Methods ---------> calculateAverageMarks()

// 3 types of creating Objects

// 01
var student = new Object();

// 02
var student2 = {};

// 03
var student3 = {
               "firstName":"Pooja",
               "age":23,
               "studentID":123
               };

// Adding item to student variable
student.firstName = "Shakya"

student3.smile = function() { alert("ha ha ha ha"); }
student3.smile()