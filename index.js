//will immediately specify requirements. require should include fs, inquirer, not sure what else.
const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');
//classes will be pulled from /lib folder. necessary classes include Manager, Intern, Engineer. employee will be constructor class?
//classes should be capitalized
// const Manager = require('./lib/Manager');
// const Intern = require('./lib/Intern');
// const Engineer = require('./lib/Engineer');
const generateTeam = require('./util/generateHtml')
const team = require('./util/generateHtml')
//Know that function to add employees will be next. unsure of whether to use wrapper function or individual for inquirer.prompt.
//I am not sure about asynchronicity yet. This is something to figure out after I have written prompter function to see if it is working in sequence improperly.
//prompt function with be a variable (wrapper function?) so as to be called on later

//need to write file asynchronously. this will use both fs and util + promisfy

const writeFileAsync = util.promisify(fs.writeFile);


//call upon inquirer package.
//we will need to be careful about defining what input we want from the user so as to pass tests
const promptInquirer = () => {
    //will return the requirer prompt and begin the command line process; thus the prompt needs an array of inputs to call on for the user to enter
    //this whole function is sort of like a character creator that the HTML will use to build the "characters" as created by user input
    return inquirer.prompt([
        // {
        //     type: 'input',
        //     name: 'name1',
        //     message: 'Please enter your name.'
        // },
        // {
        //     type: 'input',
        //     name: 'id1',
        //     message: 'Please enter your id.'
        // },
        // {
        //     type: 'input',
        //     name: 'email1',
        //     message: 'Please enter your email.'
        // },
        // {
        //     type: 'input',
        //     name: 'role1',
        //     message: 'Employee'
        // },
        {
            type: 'input',
            name: 'name2',
            message: 'Please enter the engineers name.'
        },
        {
            type: 'input',
            name: 'id2',
            message: 'Please enter the engineers id.'
        },
        {
            type: 'input',
            name: 'email2',
            message: 'Please enter the egineers email.'
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter the engineers Github.'
        },
        {
            type: 'input',
            name: 'role2',
            message: 'Engineer'
        },
        {
            type: 'input',
            name: 'name3',
            message: 'Please enter the managers name.'
        },
        {
            type: 'input',
            name: 'id3',
            message: 'Please enter managers id.'
        },
        {
            type: 'input',
            name: 'email3',
            message: 'Please enter managers email.'
        },
        {
            type: 'input',
            name: 'officenumber',
            message: 'Please enter the managers office number.'
        },
        {
            type: 'input',
            name: 'role3',
            message: 'Manager'
        },
        {
            type: 'input',
            name: 'name4',
            message: 'Please enter the interns name.'
        },
        {
            type: 'input',
            name: 'id4',
            message: 'Please enter the interns id.'
        },
        {
            type: 'input',
            name: 'email4',
            message: 'Please enter the interns email.'
        },
        {
            type: 'input',
            name: 'school',
            message: 'Please enter the interns school.'
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


//now we just need an initialization function that calls inquirer and writefile
//also need to make sure that an error is thrown should something fail. 

const initialize = () => {
    promptInquirer()
    //inquirer is started
    //now called back to find data and write file + generate html, which is complete above
    .then((answers) => writeFileAsync("index.html", generateTeam(answers)))
    //should give use our file with generated team outside of template literal/prompt combo
    //can log to just check file written successfully, as per usual
    .then(() => console.log('file written'))
    .catch((err) => console.log(err));
};

//lastly, we call our initialize function to kick things off

initialize();