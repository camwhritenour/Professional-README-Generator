// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input

const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Enter a description of your project.',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Describe the installation process.',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Describe how to use the application.',
        name: 'usage'
    },
    {
        type: 'list',
        message: 'Choose a license.',
        choices: ['CC','ISC', 'MIT', 'GPL', 'none'],
        name: 'license'
    },
    {
        type: 'input',
        message: 'Enter the contribution guidelines.',
        name: 'contributing'
    },
    {
        type: 'input',
        message: 'What tests if any did you create for this project?',
        name: 'tests'
    },
    {
        type: 'input',
        message: 'Enter your GitHub username.',
        name: 'github'
    },
    {
        type: 'input',
        message: 'Enter your email.',
        name: 'email'
    }
];




// TODO: Create a function to initialize app
// This function prompts the user with questions and when completed creates the readme file with the inputted information.
function init() {
    inquirer
    .prompt(questions)
    .then((data) => {
        const readmePageContent = generateMarkdown(data);

        fs.writeFile('./lib/README.md', readmePageContent, (err) =>
            err ? console.log(err) : console.log('Successfully created README.md file.')
        );
    });
};

// Function call to initialize app
init();
