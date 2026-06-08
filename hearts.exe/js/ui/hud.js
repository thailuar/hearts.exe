function drawHUD(){

    ctx.fillStyle =
    "rgba(0,0,0,0.75)";

    ctx.fillRect(
        15,
        15,
        340,
        120
    );

    ctx.strokeStyle = "#bb353b";

    ctx.strokeRect(
        15,
        15,
        340,
        120
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

    ctx.fillStyle = "#ebcf59";

    ctx.fillText(
        "FRAGMENTS: " +
        collectedFragments +
        "/" +
        totalFragments,
        30,
        100
    );
}

function showPhaseTitle(){

    showingPhaseTitle = true;

    phaseTitleTimer = 180;

    phaseTitleOpacity = 0;
}


window.drawHUD = drawHUD;
window.showPhaseTitle = showPhaseTitle;