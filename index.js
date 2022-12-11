// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
// Title, Sections for Description, Table Of Content, Installation, Usage
//License, Contributin, Test, Questions
const questions = () => {
    inquirer
    .prompt([
      {
        type: "input",
        name: 'Title',
        message: 'Whats the title of the project?',
      },
      {
        type: 'input',
        name: 'Description',
        message: "Give a description of the project.",
      },
      {
        type: 'input',
        name: 'Installation',
        message: "Requirerment need for the app.",
      },
      {
        type: 'input',
        name: 'Usage',
        message: "What are the usage instrctions for this app.",
      },
      {
        type: 'list',
        name: 'License',
        message: 'What license are you useing?',
        choices: ['MIT', 'GNU', 'Apache', 'Mozilla Public', 'None'],
      },
      {
        type: 'input',
        name: 'Contrabution',
        message: "Any Contributers?"
      },
      {
        type: 'input',
        name: 'Tests',
        message: "Any testing instructions for the user?"
      },
      {
        type: 'input',
        name: 'Github',
        message: 'What is your Github username?'
      },
      {
        type: 'input',
        name: 'Email',
        message: 'What is your email address?'
      }
    ])
    .then((data) =>{writeToFile(data);}
)};

// TODO: Create a function to write README file
function writeToFile(data) {   
        fs.writeFile(`./New/${data.Title}.md`, generateMarkdown(data), (err) =>
        err ? console.log(err) : console.log('Successfully created README.md in New folder!!')
        )
};

// TODO: Create a function to initialize app
    function init() {
     questions()
};

// Function call to initialize app
init();
