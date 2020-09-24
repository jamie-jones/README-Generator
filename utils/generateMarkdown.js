// function to generate markdown for README
function generateMarkdown(data) {
  let licenseLink = "";
  if (data.license === "MIT") {
    licenseLink = "(https://opensource.org/licenses/MIT)";
  } else if (data.license === "WTFPL") {
    licenseLink = "(http://www.wtfpl.net/about/)";
  } else if (data.license === "SIL") {
    licenseLink = "(https://opensource.org/licenses/OFL-1.1)";
  } else if (data.license === "Mozilla") {
    licenseLink = "(https://opensource.org/licenses/MPL-2.0)";
  }

  return `
  ![License](https://img.shields.io/badge/${data.license}-${data.username}-green)
  
  # ${data.title}
  
  ## DESCRIPTION
  ${data.description}
  
  ## TABLE OF CONTENTS
  *[Installation](#Installation)
  
  *[Usage](#Usage)

  *[License](#License)

  *[Contributing](#Contributing)

  *[Tests](#Tests)

  *[Questions](#Questions)
  
  ## INSTALLATION 
  ${data.installation}
  
  ## USAGE
  ${data.usage}
  
  ## LICENSE
  This application is licensed under the ${data.license} license.

  Find out more about the license here:

  ${licenseLink}
  
  ## CONTRIBUTING
  ${data.contributing}

  ## TESTS
  ${data.tests}

  ## QUESTIONS
  For any questions, contact me:

  Github: https://www.github.com/${data.username}
  
  email: ${data.email}
`;
}

module.exports = generateMarkdown;
