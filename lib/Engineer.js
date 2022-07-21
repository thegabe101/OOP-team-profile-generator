//can use nearly identical template to employee, with addition of criteria github

const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(name, id, email, github) {
    super(name, id, email)
        // this.name = name;
        // this.id = id;
        // this.email = email;
        this.github = github;
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

    getGithub() {
        return this.github
        console.log(`Github: ${this.github}`);
    }

    //role will still log the parent class, which is Engineer. constructor classes are above
    getRole() {
        return 'Engineer';
        console.log(`Role: ${this.Engineer}`);
    }

};

module.exports = Engineer;
//onwards for intern and manager, with only changes being in the getRole method and different criteria instead of github