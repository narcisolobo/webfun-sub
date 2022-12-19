console.log("hello world");
console.dir(this);

// Object literal notation
var spidey = {
  realName: "Peter Parker",
  heroName: "Spider-Man",
  age: 18,
  printValues: function() {
    // template literal notation
    // 'this' is the thing you're in
    console.log(`Real Name: ${this.realName}, Hero Name: ${this.heroName}`)
  }
};

/* 
  let and const are ES6 keywords to
  instantiate variables.
*/

// Getting values from a JS object
// using bracket notation
console.log(spidey["realName"]);

// using dot notation
console.log(spidey.heroName);

// var myVar = "realName"

// Setting values in a JS object
// using bracket notation
spidey["realName"] = "Petey Parker";
console.log("After change:")
console.log(spidey)

// using dot notation
spidey.heroName = "Your friendly neighborhood Spider-Man";
console.log("After change:")
console.log(spidey)

spidey.printValues();

var button = document.querySelector('#hideButton');
console.log(button);

function disappear() {
  button.remove()
}