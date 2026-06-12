// =====================================================
// GAME OVER
// =====================================================

function gameOver(){

    paused = true;

    clearMovementKeys();

    document.getElementById(
        "gameOverMenu"
    ).style.display = "flex";
}

window.gameOver = gameOver;