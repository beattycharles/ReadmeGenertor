// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
  const renderLicenseBadge = license => {
    if (license === 'MIT') {
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    } else if (license === 'Apache') {
      return '[![License: Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://www.mozilla.org/en-US/MPL/)';
    } else if (license === 'Mozilla Public') {
      return '[![License: Mozilla](https://img.shields.io/badge/license-Mozilla-red.svg)](http://unlicense.org/)';
    } else if (license === 'GNU') {
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    } else if (license !== 'no license') {
      return ' ';
    };
  };


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = license => {
  if (license === 'Apache') {
    return '[Apache](https://opensource.org/licenses/Apache-2.0)';
  } else if (license === 'MIT') {
    return '[MIT](https://opensource.org/licenses/MIT)';
  } else if (license === 'Mozilla Public') {
    return '[Mozilla](https://www.mozilla.org/en-US/MPL/)';
  } else if (license === 'GNU') {
    return '[GNU GPL v3](https://www.gnu.org/licenses/gpl-3.0)';
  } else if (license === 'no license') {
    return ' ';
  };
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = license => {

  if (license === 'none') {
    return ' ';
  } else {
    return `
  ## License
  ${renderLicenseBadge(data.license)} 
  ${renderLicenseLink(data.license)}
  This application is covered under the ${renderLicenseLink(license)} license.
    `;
  };
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.Title}
  
  ## Table of Contents

  [Description](#description)<br>
  [Useage](#usage)<br>
  [Screeshot](#screeshot)<br>
  [Test](#test)<br>
  [Contrabutions](#contrabutions)<br>
  [Questions](#questions)<br>
  [License](#license)
  
  ## Description
  ${data.Description}

  ## Usage
  ${data.Usage}

  ## Screeshot

  ## Test
  ${data.Tests}
  
  ## Contrabutions
  ${data.Contrabution}

  ## Questions
  ${data.Github}, <br>
  ${data.Email}

  ## License
  ${data.License},

`;
}

module.exports = generateMarkdown;
