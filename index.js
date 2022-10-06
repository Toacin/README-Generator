// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


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
    },
    {
        name: "collaborators",
        message: "How many collaborators?",
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
            let collabQuestions = [];
            for (i=0; i<answers.collaborators; i++) {
                collabObject = {name: `collaborator${i+1}`, message: `What is the github username of collaborator number ${i+1}`};
                collabQuestions.push(collabObject);
            }
            if (collabQuestions) {
                inquirer.prompt(collabQuestions)
                    .then((answersCollab) => writeToFile("README.md", generateMarkdown(answers, answersCollab)))
            } else {
                writeToFile("README.md", generateMarkdown(answers));
            }
            // console.log(answers);
            // let markdown = generateMarkdown(answers);
        })
}

// Function call to initialize app
init();
