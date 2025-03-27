const express = require('express');
const axios = require('axios');
const app = express();
const port = 8000;
const obterPersonagens = async () => {
    let personagens = [];
    let pagina = 1;

    try {
        while (true) {
            const response = await axios.get('https://rickandmortyapi.com/api/character', {
                params: { page: pagina }
            });
            

            if (!response.data.results || response.data.results.length === 0) {
                break; 
            }

            personagens = personagens.concat(response.data.results);

            if (!response.data.info.next) {
                break;
            }

            pagina++; 
        }

        return personagens;
    } catch (error) {
        console.error('Erro ao consultar a API do Rick and Morty:', error);
        throw new Error('Erro ao consultar os personagens.');
    }
};

app.get('/personagens', async (req, res) => {
    try {
        const personagens = await obterPersonagens();

        if (personagens.length === 0) {
            return res.status(404).json({ message: 'Nenhum personagem encontrado.' });
        }

        const personagensFormatados = personagens.map(personagem => ({
            id: personagem.id,
            nome: personagem.name || 'Nome não disponível',
            status: personagem.status || 'Status não disponível',
            especie: personagem.species || 'Espécie não disponível',
            tipo: personagem.type || 'Tipo não disponível',
            genero: personagem.gender || 'Gênero não disponível',
            imagem: personagem.image || 'Imagem não disponível'
        }));

        res.json(personagensFormatados);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao consultar os personagens.' });
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});