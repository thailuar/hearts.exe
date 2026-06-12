function drawHUD(){

    ctx.fillStyle =
    "rgba(0,0,0,0.75)";

    ctx.fillRect(
        15,
        15,
        340,
        200
    );

    ctx.strokeStyle = "#bb353b";

    ctx.strokeRect(
        15,
        15,
        340,
        200
    );

    ctx.fillStyle = "#fff";

    ctx.font = "18px monospace";

    ctx.fillText(
        "PLAYER",
        30,
        40
    );

    ctx.fillStyle = "#111";

    ctx.fillRect(
        30,
        50,
        220,
        18
    );

    ctx.fillStyle = "#bb353b";

    ctx.fillRect(
        30,
        50,
        220 *
        (player.hp/player.maxHp),
        18
    );

    ctx.fillStyle = "#fff";

    ctx.fillText(
        player.hp +
        " / " +
        player.maxHp,
        95,
        64
    );

    // Fragmentos

    ctx.fillStyle = "#ebcf59";

    ctx.fillText(
        "FRAGMENTS: " +
        collectedFragments +
        "/" +
        totalFragments,
        30,
        100
    );

    // Amigo

    ctx.fillStyle = "white";


    const friendSaved =
    currentLevel.friend?.saved;

    ctx.fillStyle = "#fff";

    ctx.fillText(
        "FRIEND: " +
        (friendSaved ? "YES" : "NO"),
        30,
        120
    );

    // Boss

    const bossAlive =
    currentLevel.enemies.some(
        e => e.type === "boss"
    );

    ctx.fillText(
        "BOSS: " +
        (
            bossAlive
            ? "✗"
            : "✓"
        ),
        30,
        150
    );
}

function showPhaseTitle(){

    showingPhaseTitle = true;

    phaseTitleTimer = 180;

    phaseTitleOpacity = 0;
}


window.drawHUD = drawHUD;
window.showPhaseTitle = showPhaseTitle;