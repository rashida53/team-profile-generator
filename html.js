//Takes in the employeeList array which contains objects of manager, engineer and interns and geenrates html for index.html 
generateHTML = (employees) => {
    var cards = generateEmployeeCards(employees)
    var html =
        `<!DOCTYPE html>
            <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
                    <link rel="stylesheet" href="../dist/styles.css">
                    <title>Template</title>
                </head>
                <body>
                    <div class="jumbotron jumbotron-fluid heading">
                        <div class="container">
                            <h1>My team</h1>
                        </div>
                    </div>
                     <div class="row row-cols-1 row-cols-md-3 g-4 justify-content-center cards-class">
                        ${cards}
                    </div>
                </body>
            </html>`
    return html;
}

//Creates individual cards for each object of manager, engineer and intern
generateCard = (employee) => {
    return ` <div class="col">
                <div class="card emplopyee-card">
                    <header class="card-headers">${employee.getName()} <br>
            ${employee.getRole()}</header>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${employee.getId()}</li>
                            <li class="list-group-item">Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
                ${getSpecialField(employee)}
                        </ul>
                    </div>
                </div>
             </div>`
}

//Function to print questions which are not common for the employees
getSpecialField = (employee) => {
    switch (employee.getRole()) {
        case 'Manager':
            return `<li class="list-group-item">Office Number: ${employee.officeNumber} </li>`;
        case 'Engineer':
            return `<li class="list-group-item">Github: <a href="https://github.com/${employee.getGithub()}">${employee.getGithub()}</a></li>`;
        case 'Intern':
            return `<li class="list-group-item">School: ${employee.getSchool()} </li>`;
    }
}

//Gets the employeeList array and loops through the objects to pass each one to generateCard
generateEmployeeCards = (data) => {
    var allCards = "";
    for (var i = 0; i < data.length; i++) {
        allCards = allCards + generateCard(data[i]);
    }
    return allCards;
}

module.exports = generateHTML;