/*query for "view all departments"*/
SELECT * FROM department;

/*query for "view all roles" -- joined query department and role*/
SELECT role.title AS job_title, role.role_id, role.salary, department.dept_name
FROM department
LEFT JOIN role
ON department.department_id = role.department_id
ORDER BY role.department_id;

