//packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

//array of questions for user input
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

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => err ? console.log(err) : console.log("Success!"));
}

// function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            // this for loop will initialize an empty an array and create an array of objects of questions to then re-prompt the user for github usernames collaborators.
            let collabQuestions = [];
            for (i=0; i<answers.collaborators; i++) {
                collabObject = {name: `collaborator${i+1}`, message: `What is the github username of collaborator number ${i+1}`};
                collabQuestions.push(collabObject);
            }
            // if the array has length, re-inquire.prompt. Pass both answers from first and second prompts to generate markdown function and write new file. If not, pass only answers from first prompt and write new file
            if (collabQuestions) {
                inquirer.prompt(collabQuestions)
                    .then((answersCollab) => writeToFile("./testFolder/README.md", generateMarkdown(answers, answersCollab)))
            } else {
                writeToFile("./testFolder/README.md", generateMarkdown(answers));
            }
        })
}

// Function call to initialize app
init();
