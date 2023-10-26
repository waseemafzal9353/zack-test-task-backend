import axios from "axios"

// Fetch Top Stories
const fetchWorldTopStoriesController = async (req, res) => {
    const section = req.params.section
try {
    const worldTopStories = await axios.get(`${process.env.API_URL}/${section}.json?api-key=${process.env.KEY}`);
    res.json(worldTopStories.data)
} catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
}
}

export {
    fetchWorldTopStoriesController,
}
