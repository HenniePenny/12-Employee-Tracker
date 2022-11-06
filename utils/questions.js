const mainQuestionsMenu = [
  {
    type: "list",
    name: "menuAll",
    message: "What would you like to do?",
    choices: [
      {
        value: "viewAllEmp",
        name: "View all employees.",
      },
      {
        value: "viewAllRoles",
        name: "View all roles.",
      },
      {
        value: "viewAllDept",
        name: "View all departments.",
      },
      {
        value: "addEmp",
        name: "Add an employee.",
      },
      {
        value: "addDept",
        name: "Add a new department.",
      },
      {
        value: "addRole",
        name: "Add a role.",
      },
      {
        value: "updateEmpRole",
        name: "Update employee role.",
      },
      {
        value: "viewEmpByDept",
        name: "View employees sorted by departments.",
      },
      {
        value: "quit",
        name: "Quit.",
      },
    ],
  },
];

const addNewEmp = [
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
    //!how to update?
    choices: [
      "HR Director",
      "Director Finance",
      "Accountant",
      "Director Legal",
      "Lawyer",
      "Sales Lead",
      "Salesperson",
    ],
  },
];

const updateEmpRole = [
  {
    type: "list",
    name: "updateEmpRoleNames",
    message: "Which employee's role would you like to update?",
    //!how to update?
    choices: [
      "Orella Abthorpe",
      "Immanuel Ozanne",
      "Kimmy Burdus",
      "Catarina Waddilove",
      "Elihu Abbotson",
      "Frederico Guillou",
      "Phillie Puttnam",
      "Werner Riccardo",
    ],
  },
  {
    type: "list",
    name: "updateEmpRoleSelect",
    message: "Which role to you want to assign to the selected employee?",
    //!how to update?
    choices: [
      "HR Director",
      "Director Finance",
      "Accountant",
      "Director Legal",
      "Lawyer",
      "Sales Lead",
      "Salesperson",
    ],
  },
];

const addNewRole = [
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
    //!how to update?
    choices: ["Human Resources", "Accounting/Finance", "Legal", "Sales"],
  },
];

const addNewDept = [
  {
    type: "input",
    name: "newDept",
    message: "What is the name of the new department?",
  },
];

module.exports = {
  mainQuestionsMenu,
  addNewEmp,
  updateEmpRole,
  addNewRole,
  addNewDept,
};
