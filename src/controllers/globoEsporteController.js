const express = require('express'); //Importação do framework de rotas
const router = express.Router();    //Inicialização das rotas
const request = require('request');  //Importação da biblioteca de requisições
const cheerio = require('cheerio');  //Importação da biblioteca que busca seletores html

//Rota iniciada
router.get('/', (req, res) => {
    request.get({
        url: 'http://globoesporte.globo.com/',
    },
        function (err, resp, body) {

            if (err || resp.statusCode != 200)
                res.send("Erro ao pegar clubes do cartola");

            //Função para pegar os itens do html que foi devolvido na requisição
            var item = getItem(body);

            //resposta da rota.
            res.send(item);

        });
});

function getItem(body) {
    //carrego a variável $ para renderizar o html passado 
    $ = cheerio.load(body);
    var dados = [];

    //percorro o seletor que estou buscando, procure um seletor que se repetirá ao longo do código
    $('#feed-placeholder .post-item').each(function () {
        var item = {};
        item.img = $(this).find('.feed-media-wrapper > div > a > div > picture > img').attr('src');
        item.titulo = $(this).find('.feed-post-body-title').text();
        item.texto = $(this).find('.feed-post-body-title').text();

        dados.push(item);
    });

    return dados;
}

module.exports = app => app.use('/globoesporte', router);