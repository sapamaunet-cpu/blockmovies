export default async function handler(req, res) {
  const API_KEY = process.env.TMDB_API_KEY;
  const { type, query, genreId } = req.query;
  let url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=id-ID`;

  if (type === 'search' && query) {
    url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}&language=id-ID`;
  } else if (type === 'genre' && genreId) {
    url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genreId}&language=id-ID`;
  }

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) { res.status(500).json({ error: 'Error API' }); }
}
