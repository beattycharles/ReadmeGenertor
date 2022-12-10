// TODO: Create a function that returns a License badge based on which License is passed in
// If there is no License, return an empty string
  const renderLicenseBadge = License => {
    if (License === 'MIT') {
      return '[![License: MIT](https://img.shields.io/badge/license-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    } else if (License === 'Apache') {
      return '[![License: Apache](https://img.shields.io/badge/license-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    } else if (License === 'Mozilla Public') {
      return '[![License: Mozilla](https://img.shields.io/badge/license-Mozilla-red.svg)](https://www.mozilla.org/en-US/MPL/)';
    } else if (License === 'GNU') {
      return '[![License: GPL v3](https://img.shields.io/badge/license-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    } else if (License === 'None') {
      return '';
    };
  };


// TODO: Create a function that returns the License link
// If there is no License, return an empty string
const renderLicenseLink = License => {
  if (License === 'Apache') {
    return '[Apache](https://opensource.org/licenses/Apache-2.0)';
  } else if (License === 'MIT') {
    return '[MIT](https://opensource.org/licenses/MIT)';
  } else if (License === 'Mozilla Public') {
    return '[Mozilla](https://www.mozilla.org/en-US/MPL/)';
  } else if (License === 'GNU') {
    return '[GNU GPL v3](https://www.gnu.org/licenses/gpl-3.0)';
  } else if (License === 'None') {
    return '';
  };
};

// TODO: Create a function that returns the License section of README
// If there is no License, return an empty string
// function renderLicenseSection() {
//   if (License === 'None') {
//     return ' ';
//   } else {`
//     ## License
//   ${renderLicenseBadge(data.License)} 
//   This application is covered under the ${renderLicenseLink(License)} License.
//   `}};

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
  [License](#License)
  
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
  ${data.Email};

  ## License
  ${renderLicenseBadge(data.License)}<br>
  ${renderLicenseLink(data.License)}

  `};
  

module.exports = generateMarkdown;
