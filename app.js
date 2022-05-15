const yargs = require("yargs")
const students = require("./students.js")


yargs.command({
    command: "add",
    describe: "add student",
    builder: {
        name: {
            type: "string",
            describe: "type student name",
            demandOption: true
        },
        comment: {
            type: "string",
            describe: "type student comment",
            demandOption: false
        },
        degree: {
            type: "array",
            describe: "type student degrees",
            demandOption: true,

        },

        id: {
            type: "number",
            describe: "type student id",
            demandOption: true
        }
    },
    handler: () => {

        students.addDate(yargs.argv.name, yargs.argv.comment, yargs.argv.degree, yargs.argv.id, yargs.argv.sum_of_degrees)

    }

});
yargs.command({

    command: "delete",
    describe: "delete by id",
    builder: {
        // name: {
        //     type: "string",
        //     describe: "write name",
        //     demandOption: true
        // },

        id: {
            type: "number",
            describe: "write name",
            demandOption: true
        }

    },
    handler: () => {
        console.log(typeof id)
        students.removeData(yargs.argv.id, yargs.argv.name)
    }

})

yargs.command({
    command: "read",
    describe: "read by id ",
    builder: {


        id: {
            type: "number",
            describe: "type student id",
            demandOption: true
        }
    },
    handler: () => {

        students.readdata(yargs.argv.name, yargs.argv.comment, yargs.argv.degree, yargs.argv.id, yargs.argv.sum_of_degrees)

    }

});
yargs.command({
    command: "list",
    describe: "list of student ",

    handler: () => {

        students.listdata()

    }

});
yargs.parse();
//console.log(yargs.argv)