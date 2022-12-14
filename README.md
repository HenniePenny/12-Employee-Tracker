# 12-Employee-Tracker

The challenge is to build a command-line application from scratch, with the goal of creating a command line application from scratch to manage a company's employee database, using Node.js, Inquirer, and MySQL.

## Acceptance Criteria

GIVEN a command-line application that accepts user input  
WHEN I start the application  
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role  
WHEN I choose to view all departments  
THEN I am presented with a formatted table showing department names and department ids  
WHEN I choose to view all roles  
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role  
WHEN I choose to view all employees  
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to  
WHEN I choose to add a department  
THEN I am prompted to enter the name of the department and that department is added to the database  
WHEN I choose to add a role  
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database  
WHEN I choose to add an employee  
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database  
WHEN I choose to update an employee role  
THEN I am prompted to select an employee to update and their new role and this information is updated in the database

## Challenges

- nested questions
- references to db data inside an inquirer prompt
- adding the result of the inquirer prompt to the database

## Links

- [GitHub Repository](https://github.com/HenniePenny/12-Employee-Tracker)
- [Link to walkthrough video](https://drive.google.com/file/d/1tn90Y2Thv-ZmAr7q2ABB90NjWZISMN8Y/view)
