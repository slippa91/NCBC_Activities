function Programmer(name, position, age, language) {
  this.name = name;
  this.position = position;
  this.age = age;
  this.language = language

  this.printStats = function () {
    console.log(`My programmer stats are as follows:\nName: ${this.name}\nAge: ${this.age}\nPosition: ${this.position}\nFavorite Language: ${this.language}\nCoding Experience: ${this.experience} years`)
  }
};

Programmer.prototype.keepWorking = function () {
  if (this.experience < 1) {
    console.log("Almost a year. Keep learning");
  } else {
    console.log("A year already? How time flies ");
  }
};

let sue = new Programmer("Sue", "TA", 48, "JavaScript");

sue.experience = 0.75

console.log(sue);
sue.printStats();
sue.keepWorking();


class Student {
  constructor(name, age, subject) {
    this.name = name;
    this.age = age;
    this.subject = subject;
  }
  takeSubjectR() {
    console.log(`${this.name} is taking ${this.subject} during the fall semester.`);
  }

  set classSubject(value) {
    this.subject = value;
  }

  get classSubject() {
    console.log(`${this.name} is taking ${this.subject} during the fall semester.`);
  }
}



let mina = new Student("Mina", "31", "Coding");

// console.log("Mina", mina);
// mina.takeSubjectR();
// mina.classSubject = "Economics";
// mina.classSubject;


class Athlete extends Student {
  constructor(name, sport, age, subject) {
    super(name, age, subject);
    this.sport = sport;
  }
}

let nick = new Athlete("Nick", "hockey", 18, "Biology");

// console.log("Nick", nick);
// nick.classSubject;

