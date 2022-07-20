//Job here is to create a constructor class.
//Three properties are ensured: name, id, email- these go for all of the object classes
//Not sure about role- it's strange because the "role" is the same as the "name of the role (i.e. manager, intern, etc."
//So perhaps getRole will simply fill in the this.property of employee, which will be the role name i.e. manager etc.


//class "Employee will use a constructor function- this constructor function will assign the primary data to each employee, regardless of role."
class Employee {
    //will accept 3 primary identifiers
    constructor(name, id, email) {
        //will use this. to ensure object uses local property
        //Thus, 'this' in this case will simply refer to the parent object employee
        this.name = name;
        this.id = id;
        this.email = email;
    };

//use template string literal 

    getName() {
        console.log(`Name: ${this.name}`);
    };

    getId() {
        console.log(`Id: ${this.id}`);
    }

    getEmail() {
        console.log(`Email: ${this.email}`);
    }

//role will simply be set to Employee class name

    getRole() {
        console.log(`Role: ${this.Employee}`);
    }

};


