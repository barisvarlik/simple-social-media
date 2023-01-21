//DTO is a data transfer object. It ensures that our request matches our data model in the database.

export default class {
    constructor(id=null, firstName, lastName, email, password) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    };
};