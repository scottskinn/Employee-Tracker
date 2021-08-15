INSERT INTO department (name) 
VALUES
    ('Sales'),
    ('Engineering'),
    ('Finace'),
    ('legal');

INSERT INTO role (title, salary, department_id)
VALUES
    ('Sales leads', 75000, 1),
    ('Engineer', 75000, 2),
    ('money person', 75000, 3),
    ('money person2', 85000, 3),
    ('law guy', 75000, 4);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ('Ronald', 'Firbank', 1, NUll),
    ('Virginia', 'Woolf', 1, NULL),
    ('Piers', 'Gaveston', 2, NULL),
    ('Charles', 'LeRoi', 1, NULL),
    ('Katherine', 'Mansfield', 1, 1),
    ('Dora', 'Carrington', 4, 2),
    ('Edward', 'Bellamy', 3, 3),
    ('Montague', 'Summers', 1, 4),
    ('Octavia', 'Butler', 2, 2),
    ('Unica', 'Zurn', 1, 1);