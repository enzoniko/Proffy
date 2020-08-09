import express from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';

const routes = express.Router();
const classesControllers = new ClassesController();
const connectionsControllers = new ConnectionsController();

routes.get('/classes', classesControllers.index);

routes.get('/connections', connectionsControllers.index);

routes.post('/classes', classesControllers.create);

routes.post('/connections', connectionsControllers.create);


export default routes;