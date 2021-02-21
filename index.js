const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown")

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'please provide a project description?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'what are the steps to install?',
        default: "run npm install"
    },
    {
        type: 'input',
        name: 'usage',
        message: 'how is this used?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'how do you run this application?',
        default: "npm start"
    },
    {
        type: 'list',
        name: 'license',
        message: 'what license would you like to use?',
        choices: ["MIT", "APACHE 2.0", "BSD 3"]
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your github username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
    }
];

// function to write README file
function writeToFile(name, data) {
    const filename = name
    const fileData = generateMarkdown(data)

    fs.writeFile(filename, fileData, (err) =>
    err ? console.log(err) : console.log("Success!")
  );
}

// function to initialize program
async function init() {
    const data = await inquirer.prompt(questions)
    writeToFile("README.md",data);
}

// function call to initialize program
init();
