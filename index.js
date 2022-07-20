//will immediately specify requirements. require should include fs, inquirer, not sure what else.
const fs = require('fs');
const inquirer = inquirer('inquirer');
const path = require('path');
//classes will be pulled from /lib folder. necessary classes include manager, intern, engineer. employee will be constructor class?
//classes should be capitalized
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
//Know that function to add employees will be next. unsure of whether to use wrapper function or individual for inquirer.prompt.
//I am not sure about asynchronicity yet. This is something to figure out after I have written prompter function to see if it is working in sequence improperly.
//prompt function with be a variable (wrapper function?) so as to be called on later


//call upon inquirer package.
//we will need to be careful about defining what input we want from the user so as to pass tests
const promptInquirer = () => {
    //will return the requirer prompt and begin the command line process; thus the prompt needs an array of inputs to call on for the user to enter
    //this whole function is sort of like a character creator that the HTML will use to build the "characters" as created by user input
    return requirer.prompt([
        {
            type: 'input',
            name: 'name1',
            message: 'Please enter your name.'
        },
        {
            type: 'input',
            name: 'id1',
            message: 'Please enter your id.'
        },
        {
            type: 'input',
            name: 'email1',
            message: 'Please enter your email.'
        },
        {
            type: 'input',
            name: 'role1',
            message: 'Employee'
        },
        {
            type: 'input',
            name: 'name2',
            message: 'Please enter your name.'
        },
        {
            type: 'input',
            name: 'id2',
            message: 'Please enter your id.'
        },
        {
            type: 'input',
            name: 'email2',
            message: 'Please enter your email.'
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter your Github.'
        },
        {
            type: 'input',
            name: 'role2',
            message: 'Engineer'
        },
        {
            type: 'input',
            name: 'name3',
            message: 'Please enter your name.'
        },
        {
            type: 'input',
            name: 'id3',
            message: 'Please enter your id.'
        },
        {
            type: 'input',
            name: 'email3',
            message: 'Please enter your email.'
        },
        {
            type: 'input',
            name: 'officenumber',
            message: 'Please enter your office number.'
        },
        {
            type: 'input',
            name: 'role3',
            message: 'Manager'
        },
        {
            type: 'input',
            name: 'name4',
            message: 'Please enter your name.'
        },
        {
            type: 'input',
            name: 'id4',
            message: 'Please enter your id.'
        },
        {
            type: 'input',
            name: 'email4',
            message: 'Please enter your email.'
        },
        {
            type: 'input',
            name: 'school',
            message: 'Please enter your school.'
        },
        {
            type: 'input',
            name: 'role4',
            message: 'Intern'
        },
    ]);
};


//Next step will be to create a literal template for an HTML, which I'll do in another file so as to test it.
//once that is created in template.html, i will just copy and paste it here with backticks + fill in jQuery input data grabbers
//That literal template will become the generated file, which will be filled in with the argument (answers) via jQuery notation as ${}.

