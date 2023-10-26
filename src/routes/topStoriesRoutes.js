import express from 'express';
import * as topStoriesController from '../controllers/topStoriesController.js'

const topStoriesRouter = express.Router();

topStoriesRouter.get('/:section', topStoriesController.fetchTopStoriesController);

export {topStoriesRouter};