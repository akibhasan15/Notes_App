// console.log(`Starting app.js`);
const os =require('os');
const fs =require('fs');
const notes=require('./notes.js');
const _ = require('lodash');
const yargs=require('yargs');

// console.log(_.isString(true));
// console.log(_.isString('Akib'));
// var filetrArray=_.uniq([1,1,2,3,1,'Andrew']);
// console.log(filetrArray);
// var user=os.userInfo();
// console.log(user);
//option_one = Asynchronous=>means need a callbackFunction
// fs.appendFile('greeting.txt',`\n Hello ${user.username} Age:${notes.age}`,function(err){
//  err?console.log('Unable to write file'):console.log('');
// });
//Option_2=synchronous=>means no need of callbackFunction
//--->> fs.appendFileSync('greeting.txt','\n Hello Node.js-2');<---
// console.log(`result:${notes.add(9,-2)}`);
const titleOptions={
    describe:'Title of a note',
    demand:true,
    alias:'t'
};
const bodyOptions={
    describe:'Body of the title',
     demand:true,
     alias:'b'
}
var argv=yargs
.command('add','Add a new note',{
    title:titleOptions,
    body:bodyOptions

}).command('list','List of all notes')
.command('read','Read a note',{
    title:titleOptions
    })
    .command('remove','Remove a note',{
        title:titleOptions
    })
.help()  
.argv;
var command = argv._[0];
//console.log('Process',process.argv);
// console.log('Yargs',argv);
// console.log(`Command:${command}`);

if(command==='add'){ 
   var note=notes.addNote(argv.title,argv.body);
   if(note){
       console.log('Note Created');
      notes.logNote(note)
   }
   else {console.log('Note Title already taken')}
//    if(notes.duplicateNotes.length!==0){
//        console.log(`error title already exists`);
//     //    console.log(notes.duplicateNotes);
//    }
//    else{
//        console.log(note);
//    }
}
else if(command==='list'){
var allNote=notes.getAll();
console.log(`Printing ${allNote.length} Note(s)`);
allNote.forEach((element) => notes.logNote(element));
}
else if(command==='read'){
    var note=notes.getNote(argv.title);
    
    // console.log(typeof note);
 if(note) {
    console.log('NOTE found');
    notes.logNote(note);}
    else{ 
        console.log('Not found');
  }
 }
else if(command==='remove'){
    var note=notes.removeNote(argv.title);
    
    var message=note?`'${argv.title}' is removed`:`'${argv.title}' is not removed`;
    console.log(message);
}
else{console.log('Command not recognised');}
