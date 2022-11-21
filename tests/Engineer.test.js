const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');


describe("Engineer", () => {
    describe("Initialization", () => {
        it("should create an object with a 'name' property set to the 'name' argument provided when called with the 'new' keyword", () => {
            const name = 'Hamza';
            const obj = new Engineer(name);

            expect(obj.name).toEqual(name);
        });
        it("should return engineer's id, email and github username when the arguments are provided", () => {
            const id = '1';
            const email = 'hskarachiwala@gmail.com';
            const github = 'hamzak';
            const obj = new Engineer('Hamza', id, email, github);
            expect(obj.id).toEqual(id);
            expect(obj.email).toEqual(email);
            expect(obj.github).toEqual(github);
        })
    })
    describe("getGithub", () => {
        it("should return 'github username' when called with get github", () => {
            const github = 'hamzak';
            expect(new Engineer('Hamza', '2', 'hsk', github).getGithub()).toEqual(github);
        })
    })
    describe("getRole", () => {
        it("should return 'engineer' when called with get role", () => {
            expect(new Engineer('Hamza').getRole()).toEqual("Engineer");
        })
    })
})