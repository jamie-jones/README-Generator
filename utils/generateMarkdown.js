// function to generate markdown for README
function generateMarkdown(data) {
  let licenseText = "";
  if (data.license === "MIT") {
    licenseText = "This application is licensed under the MIT license...";
  }
  return `# TITLE
  ${data.title}
  
  ## DESCRIPTION
  ${data.description}
  
  ## TABLE OF CONTENTS
  *[Installation](#Installation)
  *[Usage](#Usage)
  *[License](#License)
  *[Contributing](#Contributing)
  *[Tests](#Tests)
  #[Questions](#Questions)
  
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
  ${data.questions}
`;
}

module.exports = generateMarkdown;
