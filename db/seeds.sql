INSERT INTO department (dept_name)
VALUES ("Human Resources"),
       ("Accounting/Finance"),
       ("Legal"),
       ("Sales");

INSERT INTO role (title, salary, department_id)
VALUES ("HR Director", 110000, 1),
       ("HR Manager", 70000, 1),
       ("Director Finance", 120000, 2),
       ("Accountant", 85000, 2),
       ("Director Legal", 150000, 3),
       ("Lawyer", 100000, 3),
       ("Sales Lead", 100000, 4),
       ("Salesperson", 75000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ("Orella", "Abthorpe", 1),
        ("Immanuel", "Ozanne", 2, 1),
        ("Kimmy", "Burdus", 3),
        ("Catarina", "Waddilove", 4, 3),
        ("Elihu", "Abbotson", 5),
        ("Frederico", "Guillou", 7),
        ("Phillie", "Puttnam", 3),
        ("Werner", "Riccardo", 8, 7);
        
  