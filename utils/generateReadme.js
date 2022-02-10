// Generate README content
function generateReadme(answers) {
  return `
  
# ${answers.title}

  ![badge](https://img.shields.io/badge/license-${answers.license}-maroon)<br />

## Description
${answers.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ### Installation:
  ${answers.installation}
  
  ### Usage:
  ${answers.usage}

  ### License:
  This project is licensed under:<br />
    <h3><span style="color: gold;">${answers.license}</span></h3>

  ### Contributing:
  ${answers.contributing}

  ### Tests:
  ${answers.tests}

  ### Questions:
  ${answers.questions}<br />

  This project was built using the following languages:<br />
    <h3><span style="color: gold;">${answers.languages}</span></h2>  
  
  See all of my projects on my GitHub page: https://github.com/${answers.ghusername}

  Contact me at my LinkedIn page: http://www.linkedin.com/in/william-lowrimore-21778310

  You can also email me at: ${answers.email}
    `;
  };


  module.exports = generateReadme;
