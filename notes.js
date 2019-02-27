// console.log('starting notes.js')
// console.log(module);
// module.exports.add=(a,b)=>{
//    return a+b;
// }
fs = require('fs');
var fetchNote = () => {
    try {
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString); //--->converted to Js-Array-Object<----
    }
     catch (e) {
        return [];
    }
};
var saveNote=(notes)=>{
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};
var addNote = (title, body) => {
    var notes = fetchNote();
    var note = {
        title,
        body
    };

    var duplicateNotes = notes.filter((note) => note.title === title);
    //  console.log(duplicateNotes);
    //  module.exports.duplicateNotes=duplicateNotes;
    if (duplicateNotes.length === 0) {
        notes.push(note); //---->Already Note is a JS-Array-Object 
        //> Now push the JS object 'Note' < ----
       saveNote(notes);
       return note;
    }
};
getAll = () => {
    // console.log('Getting all notes');
    return fetchNote();
}
getNote = (title) => {
    console.log(`getting Note:${title}`);
    var notes=fetchNote();
    var readNote=notes.filter((note)=>note.title===title);
    return readNote[0];
}
removeNote = (title) => {
    console.log(`removing Note:${title}`);
    var notes=fetchNote();//J-array-bject
    var filteredNotes=notes.filter((note)=>note.title!==title);//js-array
    saveNote(filteredNotes);
    // console.log(filteredNotes);
    return notes.length!==filteredNotes.length;
}
var logNote=(note)=>{
  debugger;
    console.log('----');
    console.log(`Title:${note.title}`);
    console.log(`Body:${note.body}`);
}
module.exports= {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
    
}
// module.exports.duplicateNotes=duplicateNotes;
