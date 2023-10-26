import axios from "axios"

// Fetch Top Stories
const fetchTopStoriesController = async (req, res) => {
    const section = req.params.section
    const url = `${process.env.API_URL}/${section}.json?api-key=${process.env.KEY}`
try {
    const worldTopStories = await axios.get(url);
    res.json(worldTopStories.data)
} catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
}
}

export {
    fetchTopStoriesController,
}
