// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectName',
        message: "What's the name of your project?",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter a name')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'projectDescription',
        message: "Enter a description for your project",
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please enter a description')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'projectInstall',
        message: "How do you install your project?",
        validate: installInput => {
            if (installInput) {
                return true;
            } else {
                console.log('Please enter installation instructions')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'projectUse',
        message: "How do you use your project?",
        validate: useInput => {
            if (useInput) {
                return true;
            } else {
                console.log('Please enter a use for your project')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: "Enter your github username",
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Enter a github username')
                return false;
            }
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err)
            throw err;
        console.log('file written')
    });
};

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
