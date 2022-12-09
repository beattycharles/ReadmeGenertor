// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

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
        choices: ['MIT', 'GNU General PUblic License v3.0', 'Apache', 'Mozilla Public License 2.0'],
      },
      {
        type: 'input',
        name: 'Contributing',
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
    .then((answers) => {
        const writetoFile = {    
        fs.writeFile('./New/README.md', questions, (err) =>
          err ? console.log(err) : console.log('Successfully created README.md in New folder!!')
        )
    }
      }
      )
    };
    

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile("README.md,")

}

// TODO: Create a function to initialize app
function init(questions) {}

// Function call to initialize app
init();

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
  ])
  .then((answers) => {
    const htmlPageContent = generateHTML(answers);

    fs.writeFile('index.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
  });
