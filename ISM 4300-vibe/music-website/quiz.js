const recommendations = {
    happy: {
        pop: "'Happy' by Pharrell Williams",
        rock: "'Walking on Sunshine' by Katrina & The Waves",
        hiphop: "'Good Life' by Kanye West",
        electronic: "'Wake Me Up' by Avicii",
        country: "'Life is a Highway' by Tom Cochrane"
    },
    sad: {
        pop: "'Someone Like You' by Adele",
        rock: "'Fix You' by Coldplay",
        hiphop: "'Love Yours' by J. Cole",
        electronic: "'Faded' by Alan Walker",
        country: "'Humble and Kind' by Tim McGraw"
    },
    energetic: {
        pop: "'Can't Stop the Feeling!' by Justin Timberlake",
        rock: "'Eye of the Tiger' by Survivor",
        hiphop: "'Lose Yourself' by Eminem",
        electronic: "'Titanium' by David Guetta ft. Sia",
        country: "'Save a Horse (Ride a Cowboy)' by Big & Rich"
    },
    chill: {
        pop: "'Let Her Go' by Passenger",
        rock: "'Under the Bridge' by Red Hot Chili Peppers",
        hiphop: "'Sunflower' by Post Malone & Swae Lee",
        electronic: "'Sunset Lover' by Petit Biscuit",
        country: "'Die a Happy Man' by Thomas Rhett"
    }
};

document.getElementById('quiz-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const mood = this.mood.value;
    const genre = this.genre.value;
    const rec = recommendations[mood][genre];
    document.getElementById('recommendation').textContent = `We recommend: ${rec}`;
});