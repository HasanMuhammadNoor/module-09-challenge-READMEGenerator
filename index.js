const inquirer = require("inquirer");
const fs = require("fs");

inquirer.prompt([
    {
        type: "input",
        name: "Title",
        message: "Enter the title of the README.md here."
    },
    {
        type: "input",
        name: "Description",
        message: "Enter a description of the program here."
    },
    {
        type: "input",
        name: "Table of Contents",
        message: "Enter the components of the README.md here."
    },
    {
        type: "input",
        name: "Installation",
        message: "Enter the instructions regarding how to install the program here."
    },
    {
        type: "input",
        name: "Usage",
        message: "Enter how to use the program here."
    },
    {
        type: "list",
        name: "License",
        message: "Assign a license to the program here.",
        choices: ['MIT','ISC','APACHE2.0','GPL','None']
    },
    {
        type: "input",
        name: "Contributing",
        message: "Enter the developers of the program here."
    },
    {
        type: "input",
        name: "Tests",
        message: "Enter the instructions regarding how to test the program here."
    },
    {
        type: "input",
        name: "Questions",
        message: "You can contact me here."
    },
])