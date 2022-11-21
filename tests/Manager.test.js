const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');


describe("Manager", () => {
    describe("Initialization", () => {
        it("should create an object with a 'name' property set to the 'name' argument provided when called with the 'new' keyword", () => {
            const name = 'Hamza';
            const obj = new Manager(name);

            expect(obj.name).toEqual(name);
        });
        it("should return manager's id, email and officenumber when the arguments are provided", () => {
            const id = '1';
            const email = 'hskarachiwala@gmail.com';
            const officeNumber = '20';
            const obj = new Manager('Hamza', id, email, officeNumber);
            expect(obj.id).toEqual(id);
            expect(obj.email).toEqual(email);
            expect(obj.officeNumber).toEqual(officeNumber);
        })
    })
    describe("getRole", () => {
        it("should return 'manager' when called with get role", () => {
            expect(new Manager('Hamza').getRole()).toEqual("Manager");
        })
    })
})