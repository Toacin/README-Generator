// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const { listenerCount } = require('process');


// TODO: Create an array of questions for user input
const questions = [
    {
        name: "username",
        message: "What is your Github Username",
    },
    {
        name: "email",
        message: "What is your e-mail address",
    },
    {
        name: "projectName",
        message: "What is the name of your project?",
    },
    {
        name: "projectDescription",
        message: "Please describe your project: ",
    },
    {
        type: "list",
        name: "license",
        message: "What type of license should your project have?",
        choices: ["MIT","Apache","Mozilla","none"]
    },
    {
        name: "install",
        message: "Are there any installation instructions?",
        default: "N/A"
    },
    {
        name: "contribute",
        message: "What does the user need to know about contributing?",
    },
    {
        name: "usage",
        message: "What does user need to know about using the Repo?",
    },
    {
        name: "test",
        message: "What command should be run to run tests?",
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => err ? console.log(err) : console.log("Success!"));
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            console.log(answers);
            // let markdown = generateMarkdown(answers);
            writeToFile("README.md", generateMarkdown(answers));
        }
        )
}

// Function call to initialize app
init();
