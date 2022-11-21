function generateHTML(employees) {
    var cards = generateEmployeeCards(employees)
    var html =
        `<!DOCTYPE html>
            <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
                    <link rel="stylesheet" href="/dist/styles.css">
                    <title>Template</title>
                </head>
                <body>
                    <div class="jumbotron jumbotron-fluid" style="background-color: #497174;">
                        <div class="container">
                            <h1 style="text-align: center; color: aliceblue;">My team</h1>
                        </div>
                    </div>
                     <div class="row row-cols-1 row-cols-md-3 g-4 justify-content-center"
        style="padding-top: 4%; padding-left: 15%; padding-right: 15%;">
                        ${cards}
                    </div>
                </body>
            </html>`
    return html;
}

generateCard = (employee) => {
    return ` <div class="col">
                <div class="card" style="margin-bottom: 20px;">
                    <header style="background-color: #A10035; padding: 3%; color: white; text-align: center;">${employee.getName()} <br>
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

generateEmployeeCards = (data) => {
    var allCards = "";
    for (var i = 0; i < data.length; i++) {
        allCards = allCards + generateCard(data[i]);
    }
    return allCards;
}

module.exports = generateHTML;