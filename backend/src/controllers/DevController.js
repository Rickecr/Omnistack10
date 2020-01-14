const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

// index, show, store, update e delete.

module.exports = {
    async index(request, response) {
        const devs = await Dev.find();

        return response.json(devs);
    },
    async store(request, response) {
        const { github_username, techs, latitude, longitude } = request.body;

        // Verificar se user já existe.
        let dev = await Dev.findOne({ github_username });

        if (!dev) {
            const apiRes = await axios.get(`https://api.github.com/users/${github_username}`);
        
            // Caso name não existe, ele pega o de login.
            const { name = login, avatar_url, bio } = apiRes.data;
            
            const techsArray = parseStringAsArray(techs);

            const location = {
                type: 'Point',
                coordinates: [longitude, latitude],
            };

            const dev = await Dev.create({
                github_username,
                name,
                bio,
                avatar_url,
                techs: techsArray,
                location,
            });
        }

        return response.json(dev);
    }
};