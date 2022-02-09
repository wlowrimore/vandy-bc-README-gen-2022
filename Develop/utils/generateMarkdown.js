// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// Generate markdown for README
function generateMarkdown(answers) {
  return `
  
  ${answers.title}

  ![badge](https://img.shields.io/badge/license-${answers.license}-purple)<br />

  ## Description
  ${answers.description}

    ## Table of Contents
    # [Installation](#installation)
    # [Usage](#usage)
    # [License](#license)
    # [Contributing](#contributing)
    # [Tests](#tests)
    # [Questions](#questions)

    ### Installation:
    ${answers.installation}
    
    ### Usage:
    ${answers.usage}

    ### License:
    This project is licensed under:
    ${answers.license}

    ### Contributing:
    ${answers.contributing}

    ### Tests
    ${answers.tests}

    ### Questions:
    ${answers.questions}<br /><br />
    
    See all of my projects on my GitHub page: (https//github.com/${answers.ghusername})<br /><br />

    You can also email me at: ${answers.email}
    `
};


module.exports = generateMarkdown;
