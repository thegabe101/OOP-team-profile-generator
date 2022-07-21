# OOP-team-profile-generator

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Credits](#credits)
- [Usage](#Usage)
- [Bugs](#Bugs)
- [Screenshots](#screenshots)

## Description

This project involved creating a terminal app that would execute via inquirer in the command line interface in order to generate an HTML file displaying fictional employee data.

- The motivation for creating this project was continuing to develop node.js skills that integrate traditional javascript with the node runtime environment in order to build unique apps, generate individual data or files, and allow for dynamic user input in the command line prompt. The primary new element of learning here is the OOP (Object-Oriented-Programming) paradigm; this is not so much a specific JavaScript function as it is a pattern and template of coding that enables better data sharing across large swaths of files.
- I built this project largely in order to continue to get practice with the skills we are working on in class. OOP is a difficult concept to transition to, and it was especially difficult for me to grasp constructor classes, supers, and extensions. In addition, I had to learn how jest npm and testing object methods worked, which was an additional learning curve. This project was a painful experience that showed me learning OOP is not easy for everyone- especially me. This is something to keep working on into the future.
- This is a useful project in that it enables a user to generate a live HTML file based on input from the command line. This project is a model for how one can use inquirer, jest, and other npms to dynamically generate correct data in a runtime environment outside of the browser. Theoretically, on the user-end, this project could enable someone to record vital data on employees within a given company. Should the company be changing or the user want to update data on one or more of the company employees, they can simply run the inquirer prompt to generate a new HTML file with corresponding data due each employee of each class (in this case, the employee themselves, the manager, an intern, and an engineer).
- This project represented an incredible jump in difficulty and learning curve that I have not fully overcome. While other projects like the weather dashboard, password generator, and read-me generator involved rendering dynamic information through JavaScript, none required me to understand object-based methodology as deeply as this one did (or even to understand objects in JS well at all). Thus, this project represents a forward step to deeply appreciating what JavaScript is capable of in terms of rendering data and responding to user input by better reconiciling the need for complex object structures with clean user interfacing and input methodologies.

## Installation

- Running this node requires inquirer and jest, two npms listed as dev dependencies in package.json. These npms can be installed easily via the command line by entering 'npm install -----" (it can be important to list the version # as well; in this case, v8).

## Usage

- Using this website is fairly straightforward. To do so, the user right clicks index.js and selects "run in integrated terminal," should they be using a code explorer such as VS or Atom. Once the terminal is running and the npm requirements installed, the user may enter "node index.js" in order to initialize the prompts. Once that step is complete and the user has entered in required information on their own employee information + manager, intern, and engineer, an html file will be generated within the OOP-team-profile-generator folder. This HTML file can be executed in a traditional manner, and the information located within the employee cards should be filled in with the inquirer information entered at user-execution.

## Bugs

- While there are no known "bugs" afflicting the page, functionality is far from perfect. Users should know:

- There is currently no traditional "delete" or "clear" button to clear items from local storage. In order to clear an input field, a user must delete the content present and save an empty field to return the row to "default."
- Each save button corresponds with its own row. This means that entering text on row 3 and clicking save on row 8 will not save the text in row 3. The user must click the corresponding button to the row in order to save their input.

## Screenshots

- ![Alt= Screenshot showing the page, which includes a title, date, and rows in which the user can input to dos and notes.](screenshot1.jpg)
