//this page can function nearly identically to the employee.test.js methods...
//except that there is additional information required for the engineer; thus there will be additional code blocks to check that that information is being retrieved correctly. 
//engineer must have a getGithub method and be have its class overridden to return engineer, not employee.

const Engineer = require('./lib/Engineer');

//most methods will be the same as employee, but I'll change instance tests superstitiously

describe('Engineer', () => {

    describe('getName', () => {
        it('Should return the name of the parent object- the engineers name', () => {
                const name = "Lennon";
                expect(name).toEqual(Engineer.name);
        });
    });

    //can repeat similar describe methods for ID, email, role.

    describe('getId', () => {
        it('Should return the ID of the parent object- the engineers ID', () => {
                //note that expected value does not need to be a string 
                const id = 12;
                expect(id).toEqual(Engineer.id);
        });
    });

    describe('getEmail', () => {
        it('Should return the email of the parent object- the engineers email', () => {
                const email = 'iamengineer@yahoo.com';
                expect(email).toEqual(Engineer.email);
        });
    });

    describe('getRole', () => {
        it('Should return the role of the parent object- the engineers role', () => {
                const role = 'Engineer';
                expect(role).toEqual(Engineer.role);
        });
    });

    describe('getGithub', () => {
        it('Should return the Github profile page of the parent object- the engineers Github', () => {
                const github = 'engineer@github';
                expect(github).toEqual(Engineer.github);
        });
    });
});

//now that I'm familiar with writing the constructor class employee and this object engineer, writing the manager and intern will be quick.