// function to generate markdown for README
function generateMarkdown(data) {
  return `# TITLE
  ${data.title}
  
  ## DESCRIPTION
  
  ${data.description}
  
  ##${data.tableOfContents}
  ##${data.installation}
  ##${data.usage}
  ##${data.license}
  ##${data.contributing}
  ##${data.tests}
  ##${data.questions}
`;
}

module.exports = generateMarkdown;
