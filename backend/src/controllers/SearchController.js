const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
    async index(request, response) {
        // Buscar todos os devs em um raio de 10km
        // e por tecnologias.
        const { latitude, longitude, techs } = request.query;
        const techsArray = parseStringAsArray(techs);

        // Faço o uso do operadores query 'in' e ''near' do MongoDB.
        // https://docs.mongodb.com/manual/reference/operator/query/
        const devs = await Dev.find({ 
            techs: {
                $in: techsArray,
            },
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude],
                    },
                    $maxDistance: 10000,
                },
            },
        });

        return response.json({ devs });
    }
};