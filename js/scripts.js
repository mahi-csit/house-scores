const houseScores = {
    Prudhvi: 0,
    Jal: 0,
    Akaash: 0,
    Agni: 0,
    Vayu: 0
};
function addPoints(houseId) {
    houseScores[houseId] += 1;
    document.getElementById(`points-${houseId}`).textContent = houseScores[houseId];
    updateHighScoreBoard();
}
function reducePoints(houseId) {
    houseScores[houseId] = Math.max(0, houseScores[houseId] - 1);
    document.getElementById(`points-${houseId}`).textContent = houseScores[houseId];
    updateHighScoreBoard();
}
function updateHighScoreBoard() {
    const scoresArray = Object.entries(houseScores);
    scoresArray.sort((a, b) => b[1] - a[1]);
    const highscoreList = document.getElementById('highscore-list');
    highscoreList.innerHTML = '';
    scoresArray.forEach(([house, score]) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${house.charAt(0).toUpperCase() + house.slice(1)}: ${score}`;
        highscoreList.appendChild(listItem);
    });
}
function resetScores() {
    for (let house in houseScores) {
        houseScores[house] = 0;
        document.getElementById(`points-${house}`).textContent = 0;
    }
    updateHighScoreBoard();
}
