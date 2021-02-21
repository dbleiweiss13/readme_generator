// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${getLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Tests](#tests)

* [Questions](#questions)

## Installation

Use the following command to the necessary packages:

${data.installation}

## Usage

${data.usage}

## License

This project is protected by ${data.license}

## Tests

Use the following command to start the application:

${data.test}

## Questions

If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at [${data.github}](https://github.com/${data.github}/).

`;
}

module.exports = generateMarkdown;

function getLicenseBadge(license) {
  let badge = ''
  switch(license) {
   case 'MIT':
      badge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    break;

    case 'APACHE 2.0':
      badge = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)` 
    break;

    case 'BSD 3':
      badge = `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
    break;
  }

  return badge
}