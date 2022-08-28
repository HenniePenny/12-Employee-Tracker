--query for "view all departments"
SELECT * FROM department;

--query for "view all roles" -- joined query department and role
SELECT emp_role.title AS job_title, emp_role.role_id, emp_role.salary, department.dept_name
FROM department
LEFT JOIN emp_role
ON department.department_id = emp_role.department_id
ORDER BY emp_role.department_id;

--query for "view all employees"
SELECT  FROM

