const Manager = require('../lib/Manager');
const html = require('../html');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

describe('generateHTMl', () => {
    describe('special field', () => {
        it("should generate list item with 'office number' for manager", () => {
            const obj = new Manager('Hamza', 1, 'hsk', 20);

            expect(getSpecialField(obj)).toEqual(`<li class="list-group-item">Office Number: 20 </li>`);
        })
        it("should generate list item with 'github' for engineer", () => {
            const obj = new Engineer("Hamza", 2, 'hsk', 'hkarachi');

            expect(getSpecialField(obj)).toEqual(`<li class="list-group-item">Github: <a href="https://github.com/hkarachi">hkarachi</a></li>`);
        })
        it("should generate list item with 'school name' for intern", () => {
            const obj = new Intern("Hamza", 3, 'hsk', 'UT Austin');

            expect(getSpecialField(obj)).toEqual(`<li class="list-group-item">School: UT Austin </li>`);
        })
    })
    describe('generate card', () => {
        it('should dynamically create card for the object that is passed in the function', () => {
            const obj = new Manager('Hamza', 1, 'hsk', 20);

            expect(generateCard(obj)).toEqual(`<div class="col">
                <div class="card employee-card">
                    <header class="card-headers">Hamza <br>
                        Manager
                    </header>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">ID: 1</li>
                            <li class="list-group-item">Email: <a href="mailto:hsk">hsk</a></li>
                            <li class="list-group-item">Office Number: 20 </li>
                        </ul>
                    </div>
                </div>
             </div>`)
        })
    })
})
