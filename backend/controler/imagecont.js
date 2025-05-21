const axios = require('axios');
const givedata = async (req, res) => {
    const searchTerm = req.query.query;
   
const unsplashAccessKey = process.env.unsplashAccessKey;
console.log(unsplashAccessKey)
    if (!searchTerm) {
        return res.status(400).json({ error: 'Missing search query' });
    }

    try {
      
        const unsplashUrl = `https://api.unsplash.com/search/photos?query=${searchTerm}&per_page=7&client_id=${unsplashAccessKey}`;
        const unsplashResponse = await axios.get(unsplashUrl);
        res.status(200).json(unsplashResponse.data);
    } catch (error) {
        console.error('Error fetching from Unsplash:', error);
        res.status(500).json({ error: 'Failed to fetch images from Unsplash' });
    }
}

module.exports = givedata