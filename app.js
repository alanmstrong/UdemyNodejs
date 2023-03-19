const chalk = require("chalk");
const yargs = require("yargs");
// const notes = require("./notes.js");

yargs.version("1.1.0");

// yargs.command({
//   command: "add",
//   describe: "Add a new note",
//   builder: {
//     title: {
//       describe: "Note title",
//       demandOption: true,
//       type: "string",
//     },
//     body: {
//       describe: "Describe the note",
//       demandOption: true,
//       type: "string",
//     },
//   },
//   handler: function (argv) {
//     notes.addNote(argv.title, argv.body);
//   },
// });

// yargs.command({
//   command: "remove",
//   describe: "Remove a note",
//   builder: {
//     title: {
//       describe: "Note title",
//       demandOption: true,
//       type: "string",
//     },
//   },
//   handler: function (argv) {
//     notes.removeNote(argv.title);
//   },
// });

yargs.command({
  command: "add",
  describe: "Add a note [--title][--body]",
  builder: { 
    title: {
      describe: "Note title", 
      demandOption: true,
      type: "string"
    },
    body: {
      
      describe: "Note body", 
      demandOption: true,
      type: "string"
    }
  },
  handler: function (argv) {
    console.log("title: " + argv.title);
    console.log("body: " + argv.body);
  },
});

yargs.command({
  command: "remove",
  describe: "Remove a note",
  handler: function () {
    console.log("Removing a note");
  },
});
yargs.command({
  command: "list",
  describe: "List all notes",
  handler: function () {
    console.log("Listing the notes");
  },
});

yargs.command({
  command: "read",
  describe: "read a note",
  handler: function () {
    console.log("Reading a note");
  },
});

yargs.parse();
