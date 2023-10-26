import axios from "axios"

// Fetch World Top Stories
const fetchWorldTopStoriesController = async (req, res) => {
try {
    const worldTopStories = await axios.get(`${process.env.API_URL}/world.json?api-key=${process.env.KEY}`);
    res.json(worldTopStories.data)
} catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
}
}

// Fetch Technologies Top Stories
const fetchTechnologyTopStoriesController = async (req, res) => {
    try {
        const technologyTopStories = await axios.get(`${process.env.API_URL}/technology.json?api-key=${process.env.KEY}`);
        res.json(technologyTopStories.data)
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
    }

// Fetch Home Top Stories
const fetchHomeTopStoriesController = async (req, res) => {
    try {
        const homeTopStories = await axios.get(`${process.env.API_URL}/home.json?api-key=${process.env.KEY}`); 
        res.json(homeTopStories.data)
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}
export {
    fetchWorldTopStoriesController,
    fetchTechnologyTopStoriesController,
    fetchHomeTopStoriesController
}
