//will immediately specify requirements. require should include fs, inquirer, not sure what else.
const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');
const path = require('path');
const output_dir = path.resolve(__dirname, "output");
const outputpath = path.join(output_dir, "generatedTeam.html");
const teamMembers = [];
//classes will be pulled from /lib folder. necessary classes include Manager, Intern, Engineer. employee will be constructor class?
//classes should be capitalized
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const generateTeam = require('./util/generateHtml')
module.exports = teamMembers;
//Know that function to add employees will be next. unsure of whether to use wrapper function or individual for inquirer.prompt.
//I am not sure about asynchronicity yet. This is something to figure out after I have written prompter function to see if it is working in sequence improperly.
//prompt function with be a variable (wrapper function?) so as to be called on later

//need to write file asynchronously. this will use both fs and util + promisfy

const writeFileAsync = util.promisify(fs.writeFile);

const promptSelf = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please enter your name (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name before continuing.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'Please enter your employee id (Required)',
            validate: employeeId => {
                if (employeeId) {
                    return true;
                } else {
                    return false;
                }
            }
        }, 
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email address (Required)',
            validate: emailEntered => {
                if (emailEntered) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    ]).then(answers => {
        const employeeSelf = new Employee(answers.name, answers.employeeId, answers.email);
        teamMembers.push(employeeSelf)
        promptInquirer();
    })
};
//call upon inquirer package.
//we will need to be careful about defining what input we want from the user so as to pass tests
const promptInquirer = () => {
    //will return the requirer prompt and begin the command line process; thus the prompt needs an array of inputs to call on for the user to enter
    //this whole function is sort of like a character creator that the HTML will use to build the "characters" as created by user input
    return inquirer.prompt([
        {
            type: 'list',
            name: 'menu',
            message: 'What would you like to do?',
            choices: ['add a manager to my team', 'add an engineer to my team', 'add an intern to my team', 'I am done building my team']
        }])
        .then(chooseOption => {
            switch (chooseOption.menu) {
                case "add a manager to my team":
                    addManager();
                    break;
                case "add an engineer to my team":
                    addEngineer();
                    break;
                case "add an intern to my team":
                    addIntern();
                    break;
                default: 
                    generateTeam();
                    console.log('Your team is complete.')
                    break;
            }
        });
    };

    const addManager = () => {
        console.log(
            `Add your managers's details`
        );

        return inquirer.prompt ([
            {
                type: 'input',
                name: 'name',
                message: 'What is your managers name? (Required)',
                validate: managerName => {
                    if (managerName) {
                        return true;
                    } else {
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is your managers id? (Required)',
                validate: managerId => {
                    if (managerId) {
                        return true;
                    } else {
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is your managers email? (Required)',
                validate: managerEmail => {
                    if (managerEmail) {
                        return true;
                    } else {
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: 'What is your managers office number? (Required)',
                validate: managerOfficeNumber => {
                    if (managerOfficeNumber) {
                        return true;
                    } else {
                        return false;
                    }
                }
            }
        ]).then(answers => {
            const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
            teamMembers.push(manager);
            promptInquirer();
        })
    };

    const addEngineer = () => {
        console.log(
            `Add your engineer's details`
        );

        return inquirer.prompt ([
            {
                type: 'input',
                name: 'name',
                message: 'What is your engineers name? (Required)',
                validate: engineerName => {
                    if (engineerName) {
                        return true;
                    } else {
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is your managers id? (Required)',
                validate: engineerId => {
                    if (engineerId) {
                        return true;
                    } else {
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is your managers email? (Required)',
                validate: engineerEmail => {
                    if (engineerEmail) {
                        return true;
                    } else {
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'github',
                message: 'What is your engineers github? (Required)',
                validate: engineerGithub => {
                    if (engineerGithub) {
                        return true;
                    } else {
                        return false;
                    }
                }
            }
        ]).then(answers => {
            const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
            teamMembers.push(engineer);
            promptInquirer();
        })
    };

    const addIntern = () => {
        console.log(
            `Add your intern's details`
        );

        return inquirer.prompt ([
            {
                type: 'input',
                name: 'name',
                message: 'What is your interns name? (Required)',
                validate: internName => {
                    if (internName) {
                        return true;
                    } else {
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is your interns id? (Required)',
                validate: internId => {
                    if (internId) {
                        return true;
                    } else {
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is your interns email? (Required)',
                validate: internEmail => {
                    if (internEmail) {
                        return true;
                    } else {
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'school',
                message: 'What school did your intern attend? (Required)',
                validate: internSchool => {
                    if (internSchool) {
                        return true;
                    } else {
                        return false;
                    }
                }
            }
        ]).then(answers => {
            const intern = new Intern(answers.name, answers.id, answers.email, answers.officeNumber);
            teamMembers.push(intern);
            promptInquirer();
        })
    };

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
        // {
        //     type: 'input',
        //     name: 'name2',
        //     message: 'Please enter the engineers name.'
        // },
        // {
        //     type: 'input',
        //     name: 'id2',
        //     message: 'Please enter the engineers id.'
        // },
        // {
        //     type: 'input',
        //     name: 'email2',
        //     message: 'Please enter the egineers email.'
        // },
        // {
        //     type: 'input',
        //     name: 'github',
        //     message: 'Please enter the engineers Github.'
        // },
        // {
        //     type: 'input',
        //     name: 'role2',
        //     message: 'Engineer'
        // },
        // {
        //     type: 'input',
        //     name: 'name3',
        //     message: 'Please enter the managers name.'
        // },
        // {
        //     type: 'input',
        //     name: 'id3',
        //     message: 'Please enter managers id.'
        // },
        // {
        //     type: 'input',
        //     name: 'email3',
        //     message: 'Please enter managers email.'
        // },
        // {
        //     type: 'input',
        //     name: 'officenumber',
        //     message: 'Please enter the managers office number.'
        // },
        // {
        //     type: 'input',
        //     name: 'role3',
        //     message: 'Manager'
        // },
        // {
        //     type: 'input',
        //     name: 'name4',
        //     message: 'Please enter the interns name.'
        // },
        // {
        //     type: 'input',
        //     name: 'id4',
        //     message: 'Please enter the interns id.'
        // },
        // {
        //     type: 'input',
        //     name: 'email4',
        //     message: 'Please enter the interns email.'
        // },
        // {
        //     type: 'input',
        //     name: 'school',
        //     message: 'Please enter the interns school.'
        // },
        // {
        //     type: 'input',
        //     name: 'role4',
        //     message: 'Intern'
        // },


//Next step will be to create a literal template for an HTML, which I'll do in another file so as to test it.
//once that is created in template.html, i will just copy and paste it here with backticks + fill in jQuery input data grabbers
//That literal template will become the generated file, which will be filled in with the argument (answers) via jQuery notation as ${}.


//now we just need an initialization function that calls inquirer and writefile
//also need to make sure that an error is thrown should something fail. 

const initialize = () => {
    promptSelf()
    //inquirer is started
    //now called back to find data and write file + generate html, which is complete above
    .then((teamMembers) => writeFileAsync(outputpath, generateTeam(teamMembers)))
    //should give use our file with generated team outside of template literal/prompt combo
    //can log to just check file written successfully, as per usual
    .then(() => console.log('file written'))
    .catch((err) => console.log(err));
};

//lastly, we call our initialize function to kick things off

initialize();