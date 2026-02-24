// 2026 Top 10 Hits (sample data, update covers as needed)
const placeholder = "https://via.placeholder.com/48x48.png?text=Album";
const topHits = [
    { title: "New Patek", artist: "Lil Uzi Vert", cover: placeholder },
    { title: "Art", artist: "Tyla", cover: placeholder },
    { title: "Stateside + Zara Larsson", artist: "PinkPantheress", cover: placeholder },
    { title: "Crazy On You", artist: "Heart", cover: placeholder },
    { title: "Heartbeat City", artist: "The Cars", cover: placeholder },
    { title: "Flash", artist: "2Hollis", cover: placeholder },
    { title: "No Ordinary Love", artist: "Sade", cover: placeholder },
    { title: "DtMF", artist: "Bad Bunny", cover: placeholder },
    { title: "Linger", artist: "The Cranberries", cover: placeholder },
    { title: "I Just Might", artist: "Bruno Mars", cover: placeholder }
];

const list = document.getElementById('top-hits');
topHits.forEach((song, idx) => {
    const li = document.createElement('li');
    li.innerHTML = `
        <img class="album-cover" src="${song.cover}" alt="${song.title} album cover" onerror="this.src='https://via.placeholder.com/48x48.png?text=Album'">
        <span class="play-icon">&#9654;</span>
        <span class="song-title">${song.title}</span>
        <span class="artist">- ${song.artist}</span>
    `;
    li.addEventListener('click', () => {
        li.classList.add('active-song');
        setTimeout(() => li.classList.remove('active-song'), 800);
    });
    list.appendChild(li);
});

// Featured Artist (pick a random artist from the list)
function setFeaturedArtist() {
    const artistSet = Array.from(new Set(topHits.map(song => song.artist)));
    const artist = artistSet[Math.floor(Math.random() * artistSet.length)];
    document.getElementById('featured-artist').textContent = artist;
}
setFeaturedArtist();

// Random Song Generator
const randomBtn = document.getElementById('random-song-btn');
const randomResult = document.getElementById('random-song-result');
if (randomBtn) {
    randomBtn.addEventListener('click', () => {
        const song = topHits[Math.floor(Math.random() * topHits.length)];
        randomResult.innerHTML = `
            <div class="random-song-card">
                <img class="album-cover" src="${song.cover}" alt="${song.title} album cover">
                <div>
                    <strong>${song.title}</strong><br>
                    <span>${song.artist}</span>
                </div>
            </div>
        `;
    });
}