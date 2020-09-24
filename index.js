const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    if (err) {
      throw err;
    }
  });
}

// function to initialize program
function init() {
  // PROMPT FOR ALL OF THE QUESTIONS
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
      },
      {
        type: "input",
        message: "Describe your project.",
        name: "description",
      },
      {
        type: "input",
        message: "What are the installation instructions?",
        name: "installation",
      },
      {
        type: "input",
        message: "What is the application's used for?",
        name: "usage",
      },
      {
        type: "input",
        message: "Who or what are the contributors to your project?",
        name: "contributing",
      },
      {
        type: "input",
        message: "What are the testing instructions?",
        name: "tests",
      },
      {
        type: "list",
        message: "Choose a license,",
        name: "license",
        choices: ["MIT", "WTFPL", "SIL", "Mozilla"],
      },
      {
        type: "input",
        message: "What is your GitHub username?",
        name: "username",
      },
      {
        type: "input",
        message: "What is your email?",
        name: "email",
      },
    ])
    .then(function (response) {
      const generateMD = generateMarkdown(response);
      writeToFile("testingREADME.md", generateMD);
    });
}

// function call to initialize program
init();
