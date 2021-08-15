const connection = require('../config/connection');

class DB {
    constructor(connection) {
        this.connection = connection;
    };

    findAllDepartment() {
        console.log("inside index");
        return this.connection.promise().query(
            "SELECT name FROM department;"
        );

    }

    findAllEmployees() {
        console.log("inside index");
        return this.connection.promise().query(
            "SELECT first_name, last_name FROM employee;"
        );

    }

    findAllRoles() {
        console.log("inside index");
        return this.connection.promise().query(
            "SELECT id, title, department_id FROM role;"
        );

    }
};


module.exports = new DB(connection);