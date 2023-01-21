//import the usecases which this controller will control
import GetPerson from '../core/usecases/person/GetPerson.js'
import GetAllPersons from '../core/usecases/person/GetAllPerson.js'
import CreatePerson from '../core/usecases/person/CreatePerson.js'
import UpdatePerson from '../core/usecases/person/UpdatePerson.js'
import DeletePerson from '../core/usecases/person/DeletePerson.js'

//import the necessary configuration files
//none

//import the necessary data transfer objects
import ResponseDto from '../core/dtos/ResponseDto.js'

//import the necessary external dependencies
//none

export default class PersonController {
    constructor(personRepository) {
        this.personRepository = personRepository
    };

    async getPerson(personId) {
        var response = await GetPerson(personId, this.personRepository)
        if (response == null) return new ResponseDto("bad request", null, 400);
        return new ResponseDto("person getted", response, 200);
    };

    async listPerson() {
        var response = await GetAllPersons(this.personRepository)
        if (response == null) return new ResponseDto("bad request", null, 400);
        return new ResponseDto("all person records getted", response, 200);
    };

    async createPerson(req) {
        var response = await CreatePerson(req, this.personRepository)
        if (response == null) return new ResponseDto("bad request", null, 400);
        return new ResponseDto("person created", response, 200);
    };

    async updatePerson(personId, req) {
        var response = await UpdatePerson(personId, req, this.personRepository)
        if (response == null) return new ResponseDto("bad request", null, 400);
        return new ResponseDto("person updated", response, 200);
    };

    async deletePerson(personId) {
        var response = await DeletePerson(personId, this.personRepository)
        if (response == null) return new ResponseDto("bad request", null, 400);
        return new ResponseDto("person deleted", response, 200);
    };
}