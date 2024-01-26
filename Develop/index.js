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
        choices: ['CC','ISC', 'MIT', 'GPL'],
        name: 'license'
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
    },
    {
        type: 'input',
        message: 'What tests if any did you create for this project?',
        name: 'tests'
    },
    {
        type: 'input',
        message: 'Enter some commonlly asked questions a user may have.',
        name: 'questions'
    },
];

inquirer
    .prompt(questions)
    .then((data) => {
        const readmePageContent = generateMarkdown(data);

        fs.writeFile('README.md', readmePageContent, (err) =>
            err ? console.log(err) : console.log('Successfully created README.md file.')
        );
    })

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();
