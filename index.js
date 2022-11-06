const inquirer = require("inquirer");
const db = require("./utils/db");
require("dotenv").config();

const { mainQuestionsMenu, addNewDept } = require("./utils/questions");

const init = () => {
  inquirer.prompt(mainQuestionsMenu).then((answers) => {
    switch (answers.menuAll) {
      case "viewAllEmp":
        viewAllEmp();
        break;

      case "viewAllRoles":
        viewAllRoles();
        break;

      case "viewAllDept":
        viewAllDept();
        break;

      case "addDept":
        addDepartment();
        break;

      case "addRole":
        addANewRole();
        break;

      case "addEmp":
        addANewEmployee();
        break;

      case "quit":
        console.info("To quit please press control+c.");
        break;

      // default:
      //   break;
    }
  });
};

function viewAllEmp() {
  db.query(
    `SELECT 
    employee.employee_id, 
    employee.first_name, 
    employee.last_name, 
    emp_role.title, 
    department.dept_name, 
    emp_role.salary, 
    CONCAT(manager.first_name, " ", manager.last_name) AS manager
  FROM employee
  LEFT JOIN employee AS manager ON employee.manager_id = manager.employee_id
  LEFT JOIN emp_role ON employee.role_id = emp_role.role_id
  LEFT JOIN department ON emp_role.department_id = department.department_id;`,
    function (err, results) {
      console.table(results);
      init();
    }
  );
}

function viewAllRoles() {
  db.query(
    `SELECT emp_role.title AS job_title, emp_role.role_id, emp_role.salary, department.dept_name
  FROM department
  LEFT JOIN emp_role
  ON department.department_id = emp_role.department_id
  ORDER BY emp_role.department_id;`,
    function (err, results) {
      console.table(results);
      init();
    }
  );
}

function viewAllDept() {
  db.query("SELECT * FROM department", function (err, results) {
    console.table(results);
    init();
  });
}

function addDepartment() {
  inquirer.prompt(addNewDept).then((answersAddNewDept) => {
    db.query(
      "INSERT INTO department (dept_name) VALUES (?)",
      [answersAddNewDept.newDept],
      function (error, result) {
        console.log(`Added ${answersAddNewDept.newDept} to the database.`);
        init();
      }
    );
  });
}

//!!!! is this correct?
function addANewRole() {
  db.query("SELECT * FROM department", function (err, results) {
    if (err) {
      console.log(err);
    }
    const departments = results.map((result) => ({
      name: result["dept_name"],
      value: result["department_id"],
    }));
    inquirer
      .prompt([
        {
          type: "input",
          name: "newRoleName",
          message: "What is the name of the new role?",
        },
        {
          type: "input",
          name: "newRoleSalary",
          message: "What is the salary of the new role?",
        },
        {
          type: "list",
          name: "newRoleDept",
          message: "What department does the new role belong to?",
          choices: departments,
        },
      ])
      .then((answers) => {
        db.query(
          "INSERT INTO emp_role (title, salary, department_id) VALUES (?, ?, ?)",
          [answers.newRoleName, answers.newRoleSalary, answers.newRoleDept],
          (err2, results2) => {
            console.log(`Added ${answers.newRoleName} to the database`);
            init();
          }
        );
      });
  });
}

function addANewEmployee() {
  db.query("SELECT * FROM emp_role", function (err, results) {
    if (err) {
      console.log(err);
    }
    // console.log(results);
    const roles = results.map((result) => ({
      name: result["title"],
      value: result["role_id"],
    }));
    db.query("SELECT * FROM employee", function (err, results) {
      if (err) {
        console.log(err);
      }
      // console.log(results);
      const managers = results.map((result) => ({
        name: result["first_name"],
        value: result["employee_id"],
      }));
      inquirer
        .prompt([
          {
            type: "input",
            name: "newEmpFirstName",
            message: "Please type your new employee's first name:",
          },
          {
            type: "input",
            name: "newEmpLastName",
            message: "Please type the new employee's last name:",
          },
          {
            type: "list",
            name: "newEmpRole",
            message: "What is your new employee's role?",
            choices: roles,
          },
          {
            type: "list",
            name: "newEmpManager",
            message: "Who is the new employee's manager?",
            choices: managers,
          },
        ])
        .then((answers) => {
          db.query(
            "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)",
            [
              answers.newEmpFirstName,
              answers.newEmpLastName,
              answers.newEmpRole,
              answers.newEmpManager,
            ],
            (err2, results2) => {
              console.log(
                `Added ${answers.newEmpFirstName} ${answers.newEmpLastName} to the database`
              );
              init();
            }
          );
        });
    });
  });
}

init();
