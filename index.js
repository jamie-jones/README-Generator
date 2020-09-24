const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// array of questions for user
const questions = [
  "What is the title of your project?",
  "Describe your project.",
  "what are the installation instructions?",
  "What is the usage information?",
  "Who or what are the contributors to yor project?",
  "What are the text instructions?",
  "Choose a license,",
  "What is your GitHub username?",
  "What is your email?",
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeToFile(fileName, data, function (err) {
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
        message: questions[0],
        name: "title",
      },
      {
        type: "input",
        message: questions[1],
        name: "description",
      },
      {
        type: "input",
        message: questions[2],
        name: "installation",
      },
      {
        type: "input",
        message: questions[3],
        name: "usage",
      },
      {
        type: "input",
        message: questions[4],
        name: "contributing",
      },
      {
        type: "input",
        message: questions[5],
        name: "tests",
      },
      {
        type: "input",
        message: questions[6],
        name: "license",
      },
      {
        type: "input",
        message: questions[7],
        name: "username",
      },
      {
        type: "input",
        message: questions[8],
        name: "link",
      },
    ])
    .then(function (response) {
      const generateMD = generateMarkdown(response);
      writeToFile("README.md", generateMD);
    });
}

// function call to initialize program
init();
