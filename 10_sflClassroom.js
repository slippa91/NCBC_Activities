let Student = require("./sflStudent.js");
const inquirer = require('inquirer');

const Classroom = function (professor, roomNumber) {

  this.studentArray = [];
  this.professor = professor;
  this.roomNumber = roomNumber;

  this.studentCount = function () {
    console.log(`${this.professor} has ${this.studentArray.length} students in room ${this.roomNumber}.\n\n\n`);
  };

  this.addStudent = function (name, favSubject, GPA) {
    this.studentArray.push(new Student(name, favSubject, GPA));
  }

};  //classroom close

module.exports = Classroom;








