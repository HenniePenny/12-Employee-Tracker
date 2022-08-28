INSERT INTO department (dept_name)
VALUES ("Human Resources"),
       ("Accounting/Finance"),
       ("Legal"),
       ("Sales");

INSERT INTO emp_role (title, salary, department_id)
VALUES ("HR Director", 80000, 1),
       ("HR Manager", 55000, 1),
       ("Director Finance", 90000, 2),
       ("Accountant", 60000, 2),
       ("Director Legal", 100000, 3),
       ("Lawyer", 80000, 3),
       ("Sales Lead", 85000, 4),
       ("Salesperson", 65000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ("Orella", "Abthorpe", 1, null),
        ("Immanuel", "Ozanne", 2, 1),
        ("Kimmy", "Burdus", 3, null),
        ("Catarina", "Waddilove", 4, 3),
        ("Elihu", "Abbotson", 5, null),
        ("Frederico", "Guillou", 6, 5),
        ("Phillie", "Puttnam", 7, null),
        ("Werner", "Riccardo", 8, 7);
        
  