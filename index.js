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


function startup() {
    inquirer.prompt(generalQuestions).then(managerData => {
        createManager(managerData);
    })
}

const employeeList = []

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

const menu = {
    type: 'list',
    message: 'Enter your choice:',
    name: 'choice',
    choices: ['Add Engineer', 'Add Intern', 'Finish building team']
}

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
                console.log(employeeList);
                writeToFile('index.html', generateHTML(employeeList));
                return;
        }
    })

}

startup();