import startServer from './src/api/server.js';

const start = async () => {
    try {
        await startServer();
    } catch (error) {
        console.log(error);
    }
}

start();