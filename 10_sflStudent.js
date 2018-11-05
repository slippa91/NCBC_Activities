const Student = function (name, favSubject, GPA) {
  this.name = name;
  this.favSubject = favSubject;
  this.GPA = GPA;
};

let sue = new Student("Sue", "Economics", 3.32)

console.log("sue", sue);

module.exports = Student;
