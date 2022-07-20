const Intern = require('./lib/Intern');

describe('Intern', () => {

    describe('getName', () => {
        it('Should return the name of the parent object- the interns name', () => {
                const name = "Ringo";
                expect(name).toEqual(Intern.name);
        });
    });


    describe('getId', () => {
        it('Should return the ID of the parent object- the interns ID', () => {
                const id = 12;
                expect(id).toEqual(Intern.id);
        });
    });

    describe('getEmail', () => {
        it('Should return the email of the parent object- the interns email', () => {
                const email = 'imanintern@hotmail.com';
                expect(email).toEqual(Intern.email);
        });
    });

    describe('getRole', () => {
        it('Should return the role of the parent object- the interns role', () => {
                const role = 'Intern';
                expect(role).toEqual(Intern.role);
        });
    });

    describe('getSchool', () => {
        it('Should return the school of the parent object- the interns school', () => {
                const school = 'Oxford';
                expect(school).toEqual(Intern.school);
        });
    });
});