import { Router } from 'express';
 
import PersonController from '../../controllers/PersonController.js';
 
// api/persons
const personsRouter = ({ personRepository }) => {
    const router = Router();
    const personController = new PersonController(personRepository);
 
    router.route('/')
        .get(async function (req, res) {
            var result = await personController.listPerson();
            res.status(result.statusCode).send(result)
        })
        .post(async function (req, res) {
            var result = await personController.createPerson(req.body);
            res.status(result.statusCode).send(result)
        });
 
    router.route('/:personId')
        .get(async function (req, res) {
            var result = await personController.getPerson(req.params.personId);
            res.status(result.statusCode).send(result)
        })
        .delete(async function (req, res) {
            var result = await personController.deletePerson(req.params.personId);
            res.status(result.statusCode).send(result)
        })
        .put(async function (req, res) {
            var result = await personController.updatePerson(req.params.personId, req.body)
            res.status(result.statusCode).send(result)
        });
    return router;
};
 
export default personsRouter;