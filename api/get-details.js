export default async function handler(req, res) {
  const { id } = req.query;
  const API_KEY = process.env.TMDB_API_KEY;
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=id-ID&append_to_response=recommendations`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) { res.status(500).json({ error: 'Error API' }); }
}

