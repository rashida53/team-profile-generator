const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');


describe("Intern", () => {
    describe("Initialization", () => {
        it("should create an object with a 'name' property set to the 'name' argument provided when called with the 'new' keyword", () => {
            const name = 'Hamza';
            const obj = new Intern(name);

            expect(obj.name).toEqual(name);
        });
        it("should return intern's id, email and school name when the arguments are provided", () => {
            const id = '1';
            const email = 'hskarachiwala@gmail.com';
            const school = 'UT';
            const obj = new Intern('Hamza', id, email, school);
            expect(obj.id).toEqual(id);
            expect(obj.email).toEqual(email);
            expect(obj.school).toEqual(school);
        })
    })
    describe("getSchool", () => {
        it("should return 'school name' when called with get school", () => {
            const school = 'UT';
            expect(new Intern('Hamza', '2', 'hsk', school).getSchool()).toEqual(school);
        })
    })
    describe("getRole", () => {
        it("should return 'intern' when called with get role", () => {
            expect(new Intern('Hamza').getRole()).toEqual("Intern");
        })
    })
})