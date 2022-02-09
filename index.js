// Includes packages needed for this application
const fs = require('fs');
const util = require('util');
const inquirer = require('inquirer');
const generateMarkdown = require('./Develop/utils/generateMarkdown');
const writeFileAsync = util.promisify(fs.writeFile);


// Creates an array of questions for user input
const promptUser = (questions => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?'
    },

    {
      type: 'input',
      name: 'description',
      message: 'Please provide a brief description of your project.'
    },

    {
      type: 'input',
      name: 'installation',
      message: 'What are the steps required to install your project?'
    },
    
    { 
      type: 'input',
      name: 'usage',
      message: 'Please provide instructions and examples for use.  You may include screenshots.'
    },

    {
      type: 'checkbox',
      name: 'languages',
      message: 'What language(s) did you use to create this project?',
      choices: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'jQuery', 'Node']
    },

    {
      type: 'list',
      name: 'license',
      message: 'Choose the license you are using',
      choices: ['MIT', 'Apache', 'Eclipse', 'none']
    },

    {
      type: 'input',
      name: 'contributing',
      message: 'How can users contribute to your project?'
    },

    {
      type: 'editor',
      name: 'tests',
      message: 'Please provide an example of how to test your application here.'
    },

    {
      type: 'imput',
      name: 'name',
      message: 'What is your name?'
    },

    {
      type: 'input',
      name: 'ghusername',
      message: 'What is your github username?'
    },

    {
      type: 'link',
      name: 'email',
      message: 'What is your email address?'
    }
  ]);
}); 
promptUser()
  .then
  




// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();




