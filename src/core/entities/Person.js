//class definition of person entity. purely abstract.

export default class {
    constructor(id=null, firstName, lastName, email, password) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }
};