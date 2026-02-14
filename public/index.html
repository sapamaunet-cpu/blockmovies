<!DOCTYPE html>
<html lang="id">
<head>
    <title>MovieHub Jingga</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header><h1>Movie<span class="hub">Hub</span></h1></header>
    
    <div class="search-container">
        <input type="text" id="q" placeholder="Cari film...">
        <select id="g">
            <option value="">Genre</option>
            <option value="28">Action</option>
            <option value="18">Drama</option>
            <option value="27">Horror</option>
        </select>
        <button onclick="search()">Cari</button>
    </div>

    <div class="container" id="grid"></div>

    <script>
        async function load(p = '') {
            const res = await fetch('/api/get-movies' + p);
            const data = await res.json();
            document.getElementById('grid').innerHTML = data.results.map(m => `
                <div class="card" onclick="location.href='/play/tmdb/${m.id}'">
                    <img src="https://image.tmdb.org/t/p/w500${m.poster_path}">
                    <div class="info">
                        <h3>${m.title}</h3>
                        <span class="rating">⭐ ${m.vote_average.toFixed(1)}</span>
                    </div>
                </div>
            `).join('');
        }
        function search() {
            const q = document.getElementById('q').value;
            const g = document.getElementById('g').value;
            if(q) load(`?type=search&query=${q}`);
            else if(g) load(`?type=genre&genreId=${g}`);
            else load();
        }
        load();
    </script>
</body>
</html>
