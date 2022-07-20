const Manager = require('./lib/Manager');

describe('Manager', () => {

    describe('getName', () => {
        it('Should return the name of the parent object- the Managers name', () => {
                const name = "Paul";
                expect(name).toEqual(Manager.name);
        });
    });


    describe('getId', () => {
        it('Should return the ID of the parent object- the Managers ID', () => {
                const id = 12;
                expect(id).toEqual(Manager.id);
        });
    });

    describe('getEmail', () => {
        it('Should return the email of the parent object- the Managers email', () => {
                const email = 'themanager@hotmail.com';
                expect(email).toEqual(Manager.email);
        });
    });

    describe('getRole', () => {
        it('Should return the role of the parent object- the Managers role', () => {
                const role = 'Manager';
                expect(role).toEqual(Manager.role);
        });
    });

    describe('getSchool', () => {
        it('Should return the school of the parent object- the Managers office number', () => {
                const officeNumber = 5;
                expect(officeNumber).toEqual(Manager.officeNumber);
        });
    });
});