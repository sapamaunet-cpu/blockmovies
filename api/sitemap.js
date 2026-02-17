export default async function handler(req, res) {
  const TMDB_API_KEY = 'LETAKKAN_API_KEY_ANDA_DI_SINI';
  const BASE_URL = 'https://blokmovie.vercel.app'; // Ganti dengan domain Anda

  try {
    // 1. Ambil data film terbaru/populer dari TMDB
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}&language=en-US&page=1`
    );
    const data = await response.json();

    // 2. Buat kerangka XML
    let xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${BASE_URL}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <priority>1.0</priority>
      </url>`;

    // 3. Masukkan daftar film dari TMDB ke dalam XML
    data.results.forEach((movie) => {
      xml += `
      <url>
        <loc>${BASE_URL}/movie/${movie.id}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <priority>0.8</priority>
      </url>`;
    });

    xml += `</urlset>`;

    // 4. Kirim sebagai file XML
    res.setHeader('Content-Type', 'text/xml');
    res.write(xml);
    res.end();
  } catch (e) {
    res.status(500).send("Error generating sitemap");
  }
}
