let Classroom = require("./sflClassroom.js");
const inquirer = require('inquirer');


var class101 = new Classroom("Mrs. Angelo", 101);

class101.addStudent("Sue", "Economics", 3.325);
class101.addStudent("Marc", "Marketing", 2.87);

console.log(class101);
class101.studentCount();

let addStudent = function () {

  inquirer.prompt([
    {
      name: "add",
      message: "Would you like to add an additional student to the roster?",
      type: "confirm",
      default: true
    },
  ]).then(function (answers) {

    console.log("add?", answers.add);

    if (answers.add) {
      console.log(`Adding Student\n\n`);
      inquirer.prompt([
        {
          name: "name",
          message: "What is the student's name?",
        },
        {
          name: "favSubject",
          message: "What is the student's favorite subject?",
        },
        {
          name: "GPA",
          message: "What is the student's GPA?",
        }
      ]).then(function (answers) {
        console.log("answers", answers);
        console.log("sa", this.studentArray);
        class101.addStudent(answers.name, answers.favSubject, answers.GPA);
      }).then(function () {
        console.log(class101);
        class101.studentCount();
        addStudent();
      });
    }

    else {
      console.log("Enjoy your students!");
    }

  });

} //addStudent close

addStudent();