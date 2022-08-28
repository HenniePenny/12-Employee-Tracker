const inquirer = require("inquirer");
const db = require("./utils/db");

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

      default:
        break;
    }
  });
};

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
  db.query("SELECT * FROM department;", function (err, results) {
    console.table(results);
    init();
  });
}

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

init();
