//tests to identify possible issues stemming from logic in index.js. 
//tests should return expected values based on what code is looking for. 
//employee is the base class, will extend the other classes (which will be overridden to return their respective classes in final output)
//require to point to class files
const Employee = require('./lib/Employee');

//describe the expected output and use test case to verify function is returning correctly.
// need to utilize callback functions to make sure OoO proceeds properly

describe('Employee', () => {

    describe('getName', () => {
        it('Should return the name of the parent object- the employees name', () => {
                //instance of testing
                const name = "Gabe";
                //toEqual method comps name const to object property name.
                expect(name).toEqual(Employee.name);
        });
    });

    //can repeat similar describe methods for ID, email, role.

    describe('getId', () => {
        it('Should return the ID of the parent object- the employees ID', () => {
                //note that expected value does not need to be a string 
                const id = 7;
                expect(id).toEqual(Employee.id);
        });
    });

    describe('getEmail', () => {
        it('Should return the email of the parent object- the employees email', () => {
                const email = 'sowa332@gmail.com';
                expect(email).toEqual(Employee.email);
        });
    });

    describe('getRole', () => {
        it('Should return the role of the parent object- the employees role', () => {
                const role = 'employee';
                expect(role).toEqual(Employee.role);
        });
    });

});