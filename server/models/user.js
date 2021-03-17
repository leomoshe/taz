const Role = require('./role');

class User {
    constructor(id, username, password, firstname, lastname, role = Role.User) {
        // always initialize all instance properties
        this.id = id;
        this.username = username;
        this.password = password;
        this.firstname = firstname;
        this.lastname = lastname;
        this.role = role;
    }
    getFirstName() {
        return this.firstname;
    }
    getLastName() {
        return this.lastname;
    }
}

module.exports = {
    User: User
}