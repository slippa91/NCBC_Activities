var ABC = function () {
  this.a = 1;
  this.b = 2;
  this.c = 3;
}

console.log("1_ABC", ABC);
console.log("1_ABC.p", ABC.prototype);

ABC.prototype.b = 7;
ABC.prototype.h = 8;

ABC.w = 20;

console.log("2_ABC", ABC);
console.log("2_ABC.p", ABC.prototype);
console.log("ABC.w", ABC.w);


var def = new ABC();

console.log("def", def);

console.log("def.a", def.a);
def.a = 10;
console.log("2_def.a", def.a);

console.log("def-b", def.b);

console.log("2_def.h", def.h);

console.log("def.w", def.w);

def.z = 19;
console.log("def.z", def.z);






///for Chrome console.
// var ABC = function () {
//   this.a = 1;
//   this.b = 2;
//   this.c = 3;
// }

// console.dir(ABC);

// ABC.prototype.g = 7;
// ABC.prototype.h = 8;


// console.dir(ABC.prototype);




// var def = new ABC();

// console.dir(def)
