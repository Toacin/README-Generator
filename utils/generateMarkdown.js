// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT": 
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    case "Apache": 
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    case "Mozilla": 
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
    case "none": 
      return ``;
    default:
      break;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return `https://opensource.org/licenses/MIT`;
    case "Apache":
      return `https://opensource.org/licenses/Apache-2.0`;
    case "Mozilla": 
      return `https://opensource.org/licenses/MPL-2.0`;
    case "none":
      return ``;
    default:
      break;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case "MIT":
      return `This project uses the MIT License`;
    case "Apache":
      return `This project uses the Apache License`;
    case "Mozilla": 
      return `This project uses the Mozilla License`;
    case "none":
      return `N/A`;
    default:
      break;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.projectName}
${renderLicenseBadge(data.license)}

## Table of Contents
* [Description](#Description)
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contribute](#Contribute)
* [Questions](#Questions)


## Description

${data.projectDescription}

---

## Installation

Installation instructions: ${data.install}

## Usage

${data.usage}

## License

${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)}

---

## Contribute

${data.contribute}

## Questions

If you have any follow up questions, feel free to reach out at ${data.email}
GitHub: https://www.github.com/${username}
`;
}

module.exports = generateMarkdown;
