//can use nearly identical template to employee, with addition of criteria github

class Engineer {
    constructor(name, id, email, github) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
    }


    getName() {
        console.log(`Name: ${this.name}`);
    }

    getId() {
        console.log(`Id: ${this.id}`);
    }

    getEmail() {
        console.log(`Email: ${this.email}`);
    }

    getGithub() {
        console.log(`Github: ${this.github}`);
    }

    //role will still log the parent class, which is Engineer. constructor classes are above
    getRole() {
        console.log(`Role: ${this.Engineer}`);
    }

};

//onwards for intern and manager, with only changes being in the getRole method and different criteria instead of github