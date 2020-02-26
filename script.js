// *******************************
// START HERE IF YOU WANT A MORE CHALLENGING STARTING POINT FOR THIS ASSIGNMENT
// *******************************
//
// Module 4 Assignment Instructions.
//
// The idea of this assignment is to take an existing array of names
// and then output either Hello 'Name' or Good Bye 'Name' to the console.
// The program should say "Hello" to any name except names that start with a "J"
// or "j", otherwise, the program should say "Good Bye". So, the final output
// on the console should look like this:
/*
Hello Yaakov
Good Bye John
Good Bye Jen
Good Bye Jason
Hello Paul
Hello Frank
Hello Larry
Hello Paula
Hello Laura
Good Bye Jim

WARNING!!! WARNING!!!
The code does NOT currently work! It is YOUR job to make it work
as described in the requirements and the steps in order to complete this
assignment.
WARNING!!! WARNING!!!

*/

// STEP 1:
// Wrap the entire contents of script.js inside of an IIFE
// See Lecture 52, part 2
// (Note, Step 2 will be done in the SpeakHello.js file.)
(function (window){
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

// STEP 10:
// Loop over the names array and say either 'Hello' or "Good Bye"
// using the 'speak' method or either helloSpeaker's or byeSpeaker's
// 'speak' method.
// See Lecture 50, part 1
for (var i = 0; i < names.length; i++) {

  // STEP 11:
  // Retrieve the first letter of the current name in the loop.
  // Use the string object's 'charAt' function. Since we are looking for
  // names that start with either upper case or lower case 'J'/'j', call
  // string object's 'toLowerCase' method on the result so we can compare
  // to lower case character 'j' afterwards.
  // Look up these methods on Mozilla Developer Network web site if needed.
  //console.log(names[i])
  var firstLetter = names[i].charAt(0);
  firstLetter=firstLetter.toLowerCase();
  var  name=names[i];

  function greetingfunc(name){
    var final_greeting={};
    var firstLetter = name.charAt(0);
    firstLetter=firstLetter.toLowerCase();
    if (firstLetter=='j') {
    final_greeting=byeSpeaker.speakSimple(name);
  } else {
    final_greeting=helloSpeaker.speakSimple(name);
  }
  return final_greeting;
  }


  // STEP 12:
  // Compare the 'firstLetter' retrieved in STEP 11 to lower case
  // 'j'. If the same, call byeSpeaker's 'speak' method with the current name
  // in the loop. Otherwise, call helloSpeaker's 'speak' method with the current
  // name in the loop.
  if (firstLetter=='j') {
    byeSpeaker.speak(name);
  } else {
    helloSpeaker.speak(name);
  }

   let map = Array.prototype.map;
  //var speakSimpleValue=greetingfunc(name);
  //console.log(speakSimpleValue);

  const speakSimpleArr=names.map(greetingfunc);

  console.log("Array Prototype Map:" + speakSimpleArr);
}



let initialValue={hello: [], bye: []};
  const byeHelloArr = names.reduce((accumulator, currentValue) => {
  var firstLetter = currentValue.charAt(0);
  firstLetter=firstLetter.toLowerCase();
  if (firstLetter=='j' ) {
    final_greeting=byeSpeaker.speakSimple(currentValue);
    accumulator.push(final_greeting);
     initialValue['bye'].push(final_greeting);
  }
  else {
    final_greeting=helloSpeaker.speakSimple(currentValue);
    accumulator.push(final_greeting);
    initialValue['hello'].push(final_greeting);
  }
  return accumulator;
}, [initialValue]);

// console.log(initialValue);

var helloArr=initialValue['hello'];
var byeArr=initialValue['bye'];
// console.log(helloArr.length)
// console.log(byeArr.length)
console.log("Reduce Hello Array:");
for(i=0;i<helloArr.length;i++)
{
console.log(helloArr[i]);
};
console.log("Reduce Bye Array:");
for(i=0;i<byeArr.length;i++)
{
console.log(byeArr[i]);
};

})(window);
