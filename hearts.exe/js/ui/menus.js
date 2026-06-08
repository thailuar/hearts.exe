function restartGame(){

    document.getElementById(
        "gameOverMenu"
    ).style.display = "none";

    window.paused = false;

    currentLevelIndex = 0;

    currentLevel = levels[0];

    player.x = 200;
    player.y = 500;

    player.vx = 0;
    player.vy = 0;

    player.hp = player.maxHp;

    checkpoint.x = 200;
    checkpoint.y = 500;

    projectiles.length = 0;

    bgImage.src = currentLevel.background;
}

function returnToMenu(){

    location.reload();
}

function resumeGame(){

    window.paused = false;

    document.getElementById(
        "pauseMenu"
    ).style.display = "none";
}

function startGame(){

    document.getElementById(
        "menu"
    ).style.display = "none";

    window.gameStarted = true;

    showPhaseTitle();
}

function continueUpgrade(){

    document.getElementById(
        "skillUnlock"
    ).style.display = "none";

    document.getElementById(
        "upgradeScreen"
    ).style.display = "flex";
}

function chooseUpgrade(type){

    if(type === "hp"){

        player.maxHp += 30;
        player.hp = player.maxHp;
    }

    if(type === "damage"){

        player.damageMultiplier += 0.25;
    }

    if(type === "defense"){

        player.defense += 3;
    }

    document.getElementById(
        "upgradeScreen"
    ).style.display = "none";

    currentLevelIndex++;

    if(currentLevelIndex >= levels.length){

        alert("FIM DA DEMO");

        location.reload();

        return;
    }

    currentLevel =
    levels[currentLevelIndex];

    showPhaseTitle();

    bgImage.src =
    currentLevel.background;

    player.x = 200;
    player.y = 500;

    player.vx = 0;
    player.vy = 0;

    checkpoint.x = 200;
    checkpoint.y = 500;

    window.paused = false;
}

window.restartGame = restartGame;
window.returnToMenu = returnToMenu;
window.resumeGame = resumeGame;
window.startGame = startGame;
window.continueUpgrade = continueUpgrade;
window.chooseUpgrade = chooseUpgrade;