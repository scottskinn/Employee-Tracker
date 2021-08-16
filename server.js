const express = require("express");
const mysql = require("mysql2");
const inquirer = require("inquirer");
const consoleTable = require("console.table");
// const routes = require('./routes');
const DB = require('./db');




const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Todo: create an array for departments, roles and employees
console.log("hello");

function promptUser() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "mainMenu",
        message: "Please select an option:",
        choices: [
          "view all departments",
          "view all roles",
          "view all employees",
          "add a department",
          "add a role",
          "add an employee",
          "update an employee role",
          "Exit"
        ],
      },
    ])

    .then((answers) => {
      const { mainMenu } = answers;
console.log("option", answers, mainMenu );

    if (mainMenu === "view all departments") {
      viewAllDepartments();
    }

    if(mainMenu === "view all employees") {
      viewAllEmployees();
    }

    if(mainMenu === "view all roles") {
      viewAllRoles();
    }

    if(mainMenu === "add a department") {
      addDepartment();
    }

    if(mainMenu === "add a role") {
      addRole();
    }

    if(mainMenu === "add an employee") {
      addEmployee();
    }

    if(mainMenu === "update an employee role") {
      updateEmployee();
    }
  });
};


function viewAllDepartments() {
  console.log("inside db");
    DB.findAllDepartment()
      .then(([rows]) => {
        console.log("inside then");
        let department = rows;
        console.log("\n");
        console.table(department);
      })
      .then(() => promptUser());
};

function viewAllEmployees() {
  console.log("inside db");
    DB.findAllEmployees()
      .then(([rows]) => {
        console.log("inside then");
        let employee = rows;
        console.log("\n");
        console.table(employee);
      })
      .then(() => promptUser());
};

function viewAllRoles() {
  console.log("inside db");
    DB.findAllRoles()
      .then(([rows]) => {
        console.log("inside then");
        let role = rows;
        console.log("\n");
        console.table(role);
      })
      .then(() => promptUser());
};

function addEmployee() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'first_name',
      message: 'Employees first name?',
      validate: first_name => {
        if (first_name) {
          return true;
        } else {
          console.log('Enter employees first name'); 
        }
      }
    },
    {
      type: 'input',
      name: 'last_name',
      message: 'Employees last name?',
      validate: last_name => {
        if (last_name) {
          return true;
        } else {
          console.log('Enter employees last name');
        }
      }
    },
    {
      type: 'input',
      name: 'manager_id',
      message: 'Employees manager_id?',
      validate: manager_id => {
        if (manager_id) {
          return true;
        } else {
          console.log('Enter employees manager_id');
        }
      }
    }
  ]).then(() => promptUser());
};

function addRole() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'role_name',
      message: ''
    }
  ])
}
// npm start

promptUser();

