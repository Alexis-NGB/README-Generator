import inquirer from "inquirer";
import fs from "fs/promises";

let { projectTitle, description, installation, usage, contribution, tests, githubUsername, email, license } = await inquirer
    .prompt([
        {
            type: "input",
            name: "projectTitle",
            message: "What is the title of your project?",
        },
        {
            type: 'input',
            name: 'description',
            message: "Type a description for your project>",
        },
        {
            type: 'list',
            name: 'licence',
            message: "What licence do you need?",
            choices: ["Apache", "Boost", "BSD2"],
        },
        {
            type: "input",
            name: "installation",
            message: "Enter installation instructions:",
        },
        {
            type: "input",
            name: "usage",
            message: "Enter usage information:",
          },

    ])

let readmeText = `
# Project
${projectTitle}
## Description 
${description}
## The second largest heading
${generateLicence(license)}
## Installation 
${installation}
## Usage information 
${usage}
`
fs.writeFile("README.md", readmeText)
function generateLicence(licence) {
    if (licence === "Boost") {
        return "https://img.shields.io/badge/License-Boost_1.0-lightblue.svg"
    } else if (licence === "Apache") {
        return "https://img.shields.io/badge/License-Apache_2.0-blue.svg"
    } else if (licence === "BSD2") {
        return "https://img.shields.io/badge/License-BSD_2--Clause-orange.svg"
    }
}