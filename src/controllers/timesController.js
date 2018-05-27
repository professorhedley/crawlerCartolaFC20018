const express = require('express');
const router = express.Router();
const request = require('request');
const cheerio = require('cheerio');




router.get('/', (req, res) => {
    request.get({
        url: 'https://api.cartolafc.globo.com/clubes',
        headers: {
            'authority': 'api.cartolafc.globo.co',
            'access-control-allow-origin': 'https://cartolafc.globo.com',
            'user-agent': 'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36'
        }
    },
        function (err, resp, body) {

            if (err || resp.statusCode != 200)
            res.send("Erro ao pegar clubes do cartola");

            res.send(body);

        });
});

module.exports = app => app.use('/times', router);