const Employee = require('./Employee')

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
    super(name, id, email)
        // this.name = name;
        // this.id = id;
        // this.email = email;
        this.officeNumber = officeNumber;
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

    getOfficeNumber() {
        return this.officeNumber
        console.log(`Office number: ${this.officeNumber}`);
    }

    getRole() {
        return 'Manager';
        console.log(`Role: ${this.Manager}`);
    }

};

module.exports = Manager;