const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());

const TMDB_KEY = process.env.TMDB_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

const tmdb = async (endpoint, params = {}) => {
    const response = await axios.get(`${BASE_URL}${endpoint}`, {
        params: { api_key: TMDB_KEY, language: 'id-ID', ...params }
    });
    return response.data;
};

app.get('/api/movies', async (req, res) => {
    try { res.json(await tmdb('/movie/popular')); } 
    catch (err) { res.status(500).json({ error: err.message }); }
});

app.get('/api/genres', async (req, res) => {
    try { res.json(await tmdb('/genre/movie/list')); } 
    catch (err) { res.status(500).json({ error: err.message }); }
});

app.get('/api/search', async (req, res) => {
    try { res.json(await tmdb('/search/movie', { query: req.query.q })); } 
    catch (err) { res.status(500).json({ error: err.message }); }
});

app.get('/api/discover', async (req, res) => {
    try { res.json(await tmdb('/discover/movie', { with_genres: req.query.genreId })); } 
    catch (err) { res.status(500).json({ error: err.message }); }
});

app.get('/api/movie/:id', async (req, res) => {
    try { res.json(await tmdb(`/movie/${req.params.id}`, { append_to_response: 'videos,credits' })); } 
    catch (err) { res.status(500).json({ error: err.message }); }
});

module.exports = app;
