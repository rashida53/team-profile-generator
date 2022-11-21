const Employee = require('../lib/Employee');


describe("Employee", () => {
    describe("Initialization", () => {
        it("should create an object with a 'name' property set to the 'name' argument provided when called with the 'new' keyword", () => {
            const name = 'Hamza';
            const obj = new Employee(name);

            expect(obj.name).toEqual(name);
        });
        it("should return employee's id and email when the arguments are provided", () => {
            const id = '1';
            const email = 'hskarachiwala@gmail.com';
            const obj = new Employee('Hamza', id, email);
            expect(obj.id).toEqual(id);
            expect(obj.email).toEqual(email);
        })
    })
    describe("getRole", () => {
        it("should return 'employee' when called with get role", () => {
            expect(new Employee('Hamza').getRole()).toEqual("Employee");
        })
    })
})