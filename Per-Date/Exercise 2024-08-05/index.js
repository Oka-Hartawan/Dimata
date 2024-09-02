let students = ["sastra", "abby", "junha"];

let studentUpersCase = students.map((student) => {
  return student.toUpperCase();
});

console.log(studentUpersCase);

let value = 1;
console.log(value);

function myFunction(cb) {
  cb();
}

myFunction(() => {
  value = 10;
});

console.log(value);
