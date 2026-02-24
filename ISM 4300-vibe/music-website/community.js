

document.addEventListener('DOMContentLoaded', function() {
    // --- Music Trivia Quiz ---
    const triviaQuestions = [
        {
            question: "Who won the Grammy for Album of the Year in 2026?",
            options: ["Nova Aura", "Luna Solis", "Echo Drive", "Celeste"],
            answer: 1
        },
        {
            question: "Which artist released 'Electric Love' in 2026?",
            options: ["Phoenix Lane", "Atlas North", "Pulse Effect", "Jade Rivers"],
            answer: 0
        },
        {
            question: "What genre is 'Gravity' by Echo Drive?",
            options: ["Pop", "Rock", "Electronic", "Hip-Hop"],
            answer: 2
        }
    ];

    // --- Sample Discussion Posts ---
    let discussionPosts = [
        { name: "DJ_Lord", message: "Tyla in concert is so good!" },
        { name: "Hater42", message: "I hate Kendrick Lamar." },
        { name: "LyricalLlama", message: "I like Taylor Swift's new album." },
        { name: "BassBoss", message: "Heartbeat City for the win!" },
        { name: "CelestialCat", message: "The new Brent album is trash." },
        { name: "NovaNerd", message: "What happened to Lil Pump" },
        { name: "VibeQueen", message: "Afterglow is pure vibes." },
        { name: "RhythmRaccoon", message: "Runaway Lights is my road trip anthem." },
        { name: "AtlasFanatic", message: "Dreamstate is dreamy!" },
        { name: "PhoenixPhan", message: "Electric Love on repeat!" }
    ];

    let triviaIndex = 0;
    let triviaScore = 0;
    const quizDiv = document.getElementById('trivia-quiz');

    function showTriviaQuestion() {
        const q = triviaQuestions[triviaIndex];
        if (!q) {
            quizDiv.innerHTML = `<div class="trivia-score">Quiz complete! Your score: ${triviaScore}/${triviaQuestions.length}</div>`;
            return;
        }
        quizDiv.innerHTML = `<div><strong>${q.question}</strong></div>` +
            q.options.map((opt, i) => `<button class="trivia-btn" id="trivia-opt-${i}">${opt}</button>`).join('');
        q.options.forEach((_, i) => {
            document.getElementById(`trivia-opt-${i}`).onclick = () => answerTrivia(i);
        });
    }

    function answerTrivia(i) {
        const q = triviaQuestions[triviaIndex];
        q.options.forEach((_, idx) => {
            const btn = document.getElementById(`trivia-opt-${idx}`);
            if (!btn) return;
            btn.disabled = true;
            if (idx === q.answer) {
                btn.classList.add('trivia-correct');
            }
            if (idx === i && idx !== q.answer) {
                btn.classList.add('trivia-incorrect');
            }
        });
        if (i === q.answer) triviaScore++;
        setTimeout(() => {
            triviaIndex++;
            showTriviaQuestion();
        }, 900);
    }
    showTriviaQuestion();

    // --- Animated Music Timeline ---
    const timelineData = [
        {year: 2019, event: "Old Town Road by Lil Nas X releases"},
        { year: 2022, event: "Nova Aura debuts with 'Eclipse'" },
        { year: 2024, event: "Luna Solis releases 'Golden Hour'" },
        { year: 2025, event: "Phoenix Lane tops charts with 'Electric Love'" },
        { year: 2026, event: "Celeste wins Best New Artist" }
    ];
    const timelineDiv = document.getElementById('music-timeline');
    timelineDiv.innerHTML = `
        <div class="timeline-visual">
            ${timelineData.map((item, idx) => `
                <div class="timeline-node">
                    <div class="timeline-dot" style="animation-delay:${idx * 0.5}s"></div>
                    <div class="timeline-year">${item.year}</div>
                    <div class="timeline-event">${item.event}</div>
                    ${idx < timelineData.length - 1 ? '<div class="timeline-line"></div>' : ''}
                </div>
            `).join('')}
        </div>
    `;

    // --- Discussions ---
    const discussionForm = document.getElementById('discussion-form');
    const discussionList = document.getElementById('discussion-list');

    discussionForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('discussion-name').value.trim();
        const message = document.getElementById('discussion-message').value.trim();
        if (name && message) {
            discussionPosts.push({ name, message });
            renderDiscussion();
            discussionForm.reset();
        }
    });

    function renderDiscussion() {
        if (discussionPosts.length === 0) {
            discussionList.innerHTML = '<p>No posts yet. Be the first!</p>';
            return;
        }
        discussionList.innerHTML = discussionPosts.map(post =>
            `<div class="discussion-post">
                <div class="discussion-bubble">
                    <span class="discussion-name">${post.name}</span>
                    <span class="discussion-message">${post.message}</span>
                </div>
            </div>`
        ).join('');
    }
    renderDiscussion();
});
