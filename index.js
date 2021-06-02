// Applications needed 
const inquirer = require('inquirer');
const fs = require('fs');
const README = require('./utils/generateMarkdown');

//Array of questions for user
const questions = () => {
    inquirer.prompt([
{
    type: 'input',
    message: 'What is the title of your application? ',
    name: 'name',
},

{
    type: 'input',
    message: "Please enter a desciption of your application: ",
    name: 'description',
},

{
    type: 'editor',
    message: 'Explain how to install your application: ',
    name: 'install',
},

{
    type: 'input',
    message: 'Enter usage inforamtion: ', 
    name: 'usage',
},

{   
    type: 'input',
    message: 'How can other contribute to this apllication? ',
    name:  'contribute',
},

{   
    type: 'input',
    message: 'How can your application be tested? ',
    name:  'test',
},

{   
    type: 'list',
    message: 'What type of license are you using? ',
    name:  'license',
    choices: ['MIT', 'Apache', 'GPLv3'],
},

{
    type: 'input',
    message: 'What is your GitHub username? ',
    name: 'github',

},

{
    type: 'input',
    message: 'Enter your email adress: ',
    name: 'email',
},
    
]);
}; 


//Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err =>{
        if(err){
            return console.log(err);
        }
    });
}

// A function to initialize app
function init() {
    
}

// Function call to initialize app
init();
