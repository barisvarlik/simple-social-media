//import the usecases which this controller will control
import LoginPerson from "../core/usecases/person/LoginPerson.js";

//import the necessary configuration files
import constants from "../config/constants.js";

//import the necessary data transfer objects
import ResponseDto from "../core/dtos/ResponseDto.js";
import AuthDto from "../core/dtos/AuthDto.js";

//import the necessary external dependencies
import jwt from 'jsonwebtoken';

export default class AuthController {
    constructor(personRepository) {
        this.personRepository = personRepository;
    }

    async login(req) {
        var response = await LoginPerson(req, this.personRepository);
        if(response != null) {
            const token = jwt.sign(
                {
                    id: response.id,
                    email: response.email,
                },
                constants.JWT.SECRET_KEY,
                {
                    expiresIn: '2h',
                }
            );
            return new ResponseDto("ok", new AuthDto(token), 200);
        } else {
            return new ResponseDto("bad request", null, 400);
        }
    }
}