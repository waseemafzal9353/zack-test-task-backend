import express from 'express';
import * as topStoriesController from '../controllers/topStoriesController.js'

const topStoriesRouter = express.Router();

topStoriesRouter.get('/world', topStoriesController.fetchWorldTopStoriesController);
topStoriesRouter.get('/technology', topStoriesController.fetchTechnologyTopStoriesController);
topStoriesRouter.get('/home', topStoriesController.fetchHomeTopStoriesController);

export {topStoriesRouter};