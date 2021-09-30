const chalk = require('chalk')
// const validator = require('validator')
const yargs = require('yargs')
const notes = require('./notes.js')

// Goal: wire up list command
// 1. Create and export listNotes from note.js
// - "Your notes" using chalk
// - Print note title for each note
// 2. Call listNotes from command handler
// 3.Test your work!

// goal: refactor all functions
// 1. if function is a method, use ES6 method definition syntax
// 2. Otherwise, use most concise arrow function possible 
// 3. test your work!

// Challenge: Use chalk tp provide useful logs for remove
// 1. if a note is removed, print "Noye removed!" with a green background
// 2. if no note is removed, print "No note found!" with a red background


// Challenge: Wire up removeNote
// 1. load existing notes
// 2. use array filter method to remove the matching note (if any)
// 3.Save the newly created array
// 4. test your work with a title that exist and a title that doesnt exist

// Cahallenge: Setup command option and function
// 1. setup the remove command to take a required "--title" option
// 2. Create and export a removeNote functon from notes.js
// 3. Call removeNote in remove command handler 
// 4. have removeNote log the title of the note to be removed
// 5. test your work using: node app.js remove --title"some title"


// const command = process.argv[2]
// Customize yargs version
yargs.version('1.1.0')

// 
// Challenge: Add an option to yargs
// 1. Setup a body option for the add command
// 2. Configure a description, make it required, and for 
// it to be a string
// 3. Log the body value in the handler function
// 4. test your work! 



// creat add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body : {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title,argv.body)
    }
})

// creat remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
        // body : {
        //     describe: 'Note title',
        //     demandOption: true,
        //     type: 'string'
        // }
    },
    handler(argv) {
        // console.log('Title: ' + argv.title) //this to become organize
        // console.log('Body: ' + argv.body)
        notes.removeNote(argv.title)
    }
})
// add, remove, read, list

// Challenge: Add two new commands
// 
// 1. Setup command to support "List" command (print placeholder message for now)
// 2. Setup command to support "read" command (print placeholder message for now)
// 3. Test your work by running both commands and ensure correct outpu


// creat read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder:{
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

// creat list command
yargs.command({
    command: 'list',
    describe: 'list your note',
    handler () {
        notes.listNotes()
    }
})


// console.log(process.argv)

// if (command === 'add'){
//     console.log('Adding note!')
// } else if (command === 'remove') {
//     console.log('Removing note!')
// }

yargs.parse()

// console.log(yargs.argv)

// const msg = getNotes()

// console.log(msg)

// const greenMsg = chalk.bold.green.inverse('Success!')
// console.log(greenMsg)

// console.log(process.argv[2]) //2 kay ika duwa sa cmd

// 
// Challenge: Use the chalk library in your project
// 
// 1. Install versio 2.4.1 of chalk
// 2. Load chalk into app.js
// 3. Use it to print the string "Success!" to the console on green
// 4. Test your work
// Bonus: Use docs to mess around with other style. make text bold and inversed.


// console.log(validator.isURL('https/imo.com'))
//
//Challenge: define and use a function in a new file
//
//1. Create a new file called notes.js
//2.Create getNotes function that returns "Your notes..."
//3.Export getNotes function
//4. From app.js load in and call the function printing message to console





// const add = require('./utils.js')
// const sum = add(4, -2)
// console.log(sum) 
