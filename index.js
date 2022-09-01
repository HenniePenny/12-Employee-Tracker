const inquirer = require("inquirer");
const db = require("./utils/db");
require("dotenv").config();

const { mainQuestionsMenu } = require("./utils/questions");

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

      case "addDepartment":
        addDepartment();
        break;

      case "addRole":
        addNewRole();
        break;

      case "quit":
        break;

      default:
        break;
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

function addNewRole() {
  db.query(
    "SELECT dept_name AS name, department_id AS value FROM department",
    (err, departmentChoices) => {
      if (err) {
        console.log(err);
        return;
      }

      console.log(departmentChoices);
      inquirer
        .prompt([
          {
            type: "input",
            name: "title",
            message: "What is the title of the new role?",
          },
          {
            type: "input",
            name: "salary",
            message: "What is the salary of the new role?",
          },
          {
            type: "list",
            name: "department_id",
            message: "What department does the new role belong to?",
            choices: departmentChoices,
          },
        ])
        .then((answers) => {
          console.log(answers);
          db.query(
            "INSERT INTO emp_role (title, salary, department_id) VALUES (?, ?, ?)",
            [answers.title, answers.salary, answers.department_id],
            (err, result) => {
              console.log("Im here");
              if (err) {
                console.log(err);
                return;
              }
              console.log(result);
              init();
            }
          );
        });
    }
  );

  // db.query("SELECT dept_name, department_id FROM department").then(
  //   (results) => {
  //     console.log(results);
  //     const departments = results.map((result) => ({
  //       name: result["dept_name"],
  //       value: result["department_id"],
  //     }));
  //     console.log(departments);
  //     inquirer
  //       .prompt([
  //         {
  //           type: "input",
  //           name: "newRoleName",
  //           message: "What is the name of the new role?",
  //         },
  //         {
  //           type: "input",
  //           name: "newRoleSalary",
  //           message: "What is the salary of the new role?",
  //         },
  //         {
  //           type: "list",
  //           name: "newRoleDept",
  //           message: "What department does the new role belong to?",
  //           choices: departments,
  //         },
  //       ])
  //       .then((answers) => {
  //         console.log(answers);
  //         db.query(
  //           "INSERT INTO emp_role (title, salary, department_id) VALUES (?, ?, ?)",
  //           [answers.newRoleName, answers.newRoleSalary, answers.newRoleDept],
  //           (err, res) => {
  //             console.log(res);
  //             if (err) {
  //               console.log("An error ocurred. Please try again later.");
  //               return;
  //             } else {
  //               console.log("The role has been added to the data base.");
  //             }
  //           }
  //         );
  //         console.log(`Added ${answers.newRoleName} to the database`);
  //         init();
  //       });
  //   }
  // );
}

function addDepartment() {
  inquirer.prompt(addNewDept).then((answersAddNewDept) => {
    db.query("INSERT INTO department (dept_name) VALUE (?)", function () {
      answersAddNewDept.newDept;
      //!and push to choices array!!!
    }).then();
    console.log(`Added ${answersAddNewDept.newDept} to the database.`);
  });
}

init();
