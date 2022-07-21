const Employee = require('./Employee')

class Intern extends Employee {
    constructor(name, id, email, school) {
    super(name, id, email)
        // this.name = name;
        // this.id = id;
        // this.email = email;
        this.school = school;
    }


    getName() {
        return this.name
        console.log(`Name: ${this.name}`);
    }

    getId() {
        return this.id
        console.log(`Id: ${this.id}`);
    }

    getEmail() {
        return this.email
        console.log(`Email: ${this.email}`);
    }

    getSchool() {
        return this.school
        console.log(`School: ${this.school}`);
    }

    getRole() {
        return 'Intern';
        console.log(`Role: ${this.Intern}`);
    }

};

module.exports = Intern;