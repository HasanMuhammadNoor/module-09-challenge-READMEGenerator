const inquirer = require("inquirer");
const fs = require("fs");

inquirer.prompt([
    {
        type: "input",
        name: "Title",
        message: "Enter the title of the README.md here:"
    },
    {
        type: "input",
        name: "Description",
        message: "Enter a description of the program here:"
    },
    {
        type: "input",
        name: "TableOfContents",
        message: "Enter the components of the README.md here:"
    },
    {
        type: "input",
        name: "Installation",
        message: "Enter the instructions regarding how to install the program here:"
    },
    {
        type: "input",
        name: "Usage",
        message: "Enter how to use the program here:"
    },
    {
        type: "list",
        name: "License",
        message: "Assign a license to the program here:",
        choices: ['MIT','ISC','APACHE2.0','GPL','None']
    },
    {
        type: "input",
        name: "Contributing",
        message: "Enter the developer(s) of the program here:"
    },
    {
        type: "input",
        name: "Tests",
        message: "Enter the instructions regarding how to test the program here:"
    },
    {
        type: "input",
        name: "GitHub",
        message: "Enter your username on GitHub here:"
    },
    {
        type: "input",
        name: "Email",
        message: "Enter your email here:"
    },
]).then(response =>{
    const readMeContent = `
# Title: ${response.Title}

## Description: ${response.Description}
    
### Table of Contents: 
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Developer(s)](#Contributing)
* [Tests](#Tests)
* [Questions](#GitHub)
    
#### Installation: 
${response.Installation}
#### Usage: 
${response.Usage}
#### License: 
![GitHub license](https://img.shields.io/badge/license-${response.license}-green.svg)
#### Developer(s): 
${response.Contributing}
#### Tests: 
${response.Tests}
#### Questions: 
You can contact me @ ${response.Email}
<br>
[Here's my profile on GitHub!](https://github.com/${response.GitHub})

    `

    console.log(readMeContent)

    fs.writeFileSync("README.md",readMeContent,function(err){
        if(err){
            throw err;
        }
    })
})