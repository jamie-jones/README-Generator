// function to generate markdown for README
function generateMarkdown(data) {
  return `
  ![License](http//img.shields.io/static/v1?label=${data.license}&message=${data.username}>&color=<COLOR>)
  
  # TITLE
  ${data.title}
  
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
  ${data.license}
  
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
