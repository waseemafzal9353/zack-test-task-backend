import axios from "axios"

// Fetch Top Stories
const fetchTopStoriesController = async (req, res) => {
    const section = req.params.section
    const url = `${process.env.API_URL}/${section}.json?api-key=${process.env.KEY}`
try {
    const topStories = await axios.get(url);
    res.json(topStories.data)
} catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal server error' });
}
}

export {
    fetchTopStoriesController,
}
