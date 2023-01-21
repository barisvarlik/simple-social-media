//This module collects the repositories and distributes them in the application

//import all the repositories
import PersonRepository from "./repositories/PersonRepository.js";
import PostRepository from "./repositories/PostRepository.js";
import CommentRepository from "./repositories/CommentRepository.js";

function services () {
    const services = {};

    //assign each repository to their corresponding name as below
    services.personRepository = new PersonRepository();
    services.postRepository = new PostRepository();
    services.commentRepository = new CommentRepository();

    return services;
}

export default services();