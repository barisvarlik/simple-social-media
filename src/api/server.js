import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes/index.js'
import serviceLocator from '../infrastructure/servicelocator.js';

const createServer = async () => {

 
    var app = express();
    var PORT = 3000;
 
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
 
    app.set('serviceLocator', serviceLocator);
 
    app.use('/api', routes(app.get('serviceLocator')));
 
    app.listen(PORT, function (err) {
        if (err) console.log(err);
        console.log("Server listening: ", "http://localhost:" + PORT + "/api");
    });
}

export default createServer;