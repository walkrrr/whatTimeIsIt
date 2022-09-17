var time = new Date().getHours();

// Your conditional statements here

// alert()

// Lesson 3, Step 6 Exercise: "What Time Is It?" - Skillcrush

// console.log(time);

var greeting = "Hello, ";
var name = "Walkrrr!";

if (time <= 12) {
  console.log((greeting = "Good morning "));
} else if (time >= 18) {
  console.log((greeting = "Good afternoon "));
} else if (time >= 22) {
  console.log((greeting = "Good evening "));
} else console.log("Go to bed!");

alert(greeting + name);
