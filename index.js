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