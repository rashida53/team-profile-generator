const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./html');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const generalQuestions = [
    {
        type: 'input',
        message: 'Enter your name',
        name: 'name'
    },
    {
        type: 'input',
        message: 'Enter your employee ID',
        name: 'id'
    },
    {
        type: 'input',
        message: 'Enter your email',
        name: 'email'
    }
]

//Initial function when you run node index.js
function startup() {
    inquirer.prompt(generalQuestions).then(managerData => {
        createManager(managerData);
    })
}

//Array which will contain employee objects
const employeeList = []

const menu = {
    type: 'list',
    message: 'Please select from the following:',
    name: 'choice',
    choices: ['Add Engineer', 'Add Intern', 'Finish building team']
}

//Creates manager object and adds to employeeList array
createManager = (managerData) => {
    var managerQuestion = {
        type: 'input',
        message: 'Enter your office number',
        name: 'number'
    }
    inquirer.prompt(managerQuestion).then((response) => {
        employeeList.push(
            new Manager(
                managerData.name,
                managerData.id,
                managerData.email,
                response.number
            )
        );
        displayMenu();
    })
}

//Creates engineer object and adds to employeeList array
createEngineer = (engineerData) => {
    const engineerQuestion = {
        type: 'input',
        message: 'What is your github username?',
        name: 'github'
    }
    inquirer.prompt(engineerQuestion).then(response => {
        employeeList.push(
            new Engineer(
                engineerData.name,
                engineerData.id,
                engineerData.email,
                response.github
            )
        );
        displayMenu();
    })

}

//Creates intern object and adds to employeeList array
createIntern = (internData) => {
    const internQuestion = {
        type: 'input',
        message: 'What is your school name?',
        name: 'school'
    }
    inquirer.prompt(internQuestion).then(response => {
        employeeList.push(
            new Intern(
                internData.name,
                internData.id,
                internData.email,
                response.school
            )
        );
        displayMenu();
    })
}

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) =>
        error ? console.error(err) : console.log('Team Roster generated!')
    );
}

//Displays menu to add engineer/intern/finish building team, passes data to engineer and intern functions to create their objectss
function displayMenu() {
    inquirer.prompt(menu).then(response => {
        switch (response.choice) {
            case 'Add Engineer':
                inquirer.prompt(generalQuestions).then(engineerData => {
                    createEngineer(engineerData);
                });
                break;
            case 'Add Intern':
                inquirer.prompt(generalQuestions).then(internData => {
                    createIntern(internData);
                });
                break;
            case 'Finish building team':
                writeToFile('index.html', generateHTML(employeeList));
                return;
        }
    })

}

startup();