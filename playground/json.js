// var obj={
//     name:'Akib'
// }
// console.log(typeof obj);
// var Stringobj=JSON.stringify(obj);
// console.log(typeof Stringobj);
// console.log(Stringobj);

// var personString='{"name":"akib","age":25}';
// var person = JSON.parse(personString);
// console.log(typeof personString);
// console.log(typeof person);
// console.log(person);

const fs = require('fs');
var originalNote = {
    title: 'Some title',
    body: 'some body'
};
// console.log(typeof originalNote);

var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);
// console.log(typeof originalNoteString);
// console.log(originalNoteString);
var noteString = fs.readFileSync('notes.json');
console.log(typeof noteString);
// console.log(noteString);
var note = JSON.parse(noteString);
// console.log(typeof note);
// console.log(note);