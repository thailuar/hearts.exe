function drawBackground(){

    // desenha fundo proporcional
    const imgRatio =
    bgImage.width / bgImage.height;

    const canvasRatio =
    canvas.width / canvas.height;

    let drawWidth;
    let drawHeight;

    if(imgRatio > canvasRatio){

        drawHeight = canvas.height;
        drawWidth = drawHeight * imgRatio;
    }
    else{

        drawWidth = canvas.width;
        drawHeight = drawWidth / imgRatio;
    }

    ctx.drawImage(
        bgImage,
        0,
        0,
        drawWidth,
        drawHeight
    );

    // overlay escuro leve
    ctx.fillStyle =
    "rgba(0,0,0,0.18)";

    ctx.fillRect(
        0,
        0,
        canvas.width,
        canvas.height
    );
}

function drawWater(){

    currentLevel.waterZones.forEach(w=>{

        ctx.fillStyle = "#506cb5";

        ctx.fillRect(
            w.x,
            915,
            w.w,
            400
        );
    });
}

function drawPlatforms(){

    currentLevel.platforms.forEach(p=>{

        ctx.fillStyle = "#debc6e";

        ctx.fillRect(
            p.x,
            p.y,
            p.w,
            p.h
        );

        ctx.fillStyle = "#bb353b";

        for(let i=0;i<p.w;i+=16){

            ctx.fillRect(
                p.x+i,
                p.y,
                8,
                p.h
            );
        }
    });
}

function drawTV(){

    const tv =
    currentLevel.tv;

    ctx.fillStyle = "#111";

    ctx.fillRect(
        tv.x,
        tv.y,
        50,
        50
    );

    ctx.fillStyle = "#506cb5";

    ctx.fillRect(
        tv.x+5,
        tv.y+5,
        40,
        25
    );

    if(
        Math.abs(player.x-tv.x)<80 &&
        Math.abs(player.y-tv.y)<80
    ){

        ctx.fillStyle = "#fff";

        ctx.fillText(
            "E",
            tv.x+20,
            tv.y-10
        );

        if(keys["e"]){

            showDialogue(tv.text);
        }
    }
}

function drawPortal(){

    const bossAlive =
    currentLevel.enemies.some(
        e => e.type === "boss"
    );

    const friendSaved =
    currentLevel.friend?.saved;

    const allFragmentsCollected =
    collectedFragments >= totalFragments;

    const p =
    currentLevel.portal;

    // Portal bloqueado
    if(
        bossAlive ||
        !friendSaved ||
        !allFragmentsCollected
    ){

        ctx.fillStyle =
        "rgba(80,108,181,0.3)";

        ctx.fillRect(
            p.x,
            p.y,
            p.w,
            p.h
        );

        ctx.strokeStyle =
        "#666";

        ctx.lineWidth = 3;

        ctx.strokeRect(
            p.x,
            p.y,
            p.w,
            p.h
        );

        ctx.fillStyle =
        "white";

        ctx.font =
        "16px monospace";

        let message =
        "PORTAL LOCKED";

        if(!friendSaved){

            message =
            "SAVE FRIEND";
        }
        else if(!allFragmentsCollected){

            message =
            "MISSING FRAGMENTS";
        }
        else if(bossAlive){

            message =
            "DEFEAT BOSS";
        }

        ctx.fillText(
            message,
            p.x - 20,
            p.y - 20
        );

        return;
    }

    // Portal liberado

    ctx.fillStyle =
    "#506cb5";

    ctx.fillRect(
        p.x,
        p.y,
        p.w,
        p.h
    );

    ctx.strokeStyle =
    "#ffffff";

    ctx.lineWidth = 4;

    ctx.strokeRect(
        p.x,
        p.y,
        p.w,
        p.h
    );

    ctx.fillStyle =
    "#ffffff";

    ctx.font =
    "16px monospace";

    ctx.fillText(
        "PORTAL READY",
        p.x - 10,
        p.y - 20
    );
}

function drawGirlfriend(){

    if(!currentLevel.girlfriend)
    return;

    const bossAlive =
    currentLevel.enemies.some(
        e=>e.type==="boss"
    );

    if(bossAlive)
    return;

    const g =
    currentLevel.girlfriend;

    ctx.fillStyle = "#ff66cc";

    ctx.fillRect(
        g.x,
        g.y,
        g.w,
        g.h
    );
}

function drawPhaseTitle(){

    if(!showingPhaseTitle)
    return;

    // fade in
    if(phaseTitleTimer > 120){

        phaseTitleOpacity += 0.02;
    }

    // fade out
    else{

        phaseTitleOpacity -= 0.015;
    }

    // limita
    if(phaseTitleOpacity > 1){

        phaseTitleOpacity = 1;
    }

    if(phaseTitleOpacity < 0){

        phaseTitleOpacity = 0;
    }

    ctx.save();

    ctx.globalAlpha =
    phaseTitleOpacity;

    ctx.fillStyle = "#ffffff";

    ctx.font = "72px monospace";

    ctx.textAlign = "center";

    ctx.textBaseline = "middle";

    // sombra
    ctx.shadowColor = "#506cb5";
    ctx.shadowBlur = 25;

    ctx.fillText(
        currentLevel.title,
        canvas.width / 2,
        canvas.height / 2
    );

    ctx.restore();

    phaseTitleTimer--;

    if(phaseTitleTimer <= 0){

        showingPhaseTitle = false;
    }
}

window.drawBackground = drawBackground;
window.drawWater = drawWater;
window.drawPlatforms = drawPlatforms;
window.drawTV = drawTV;
window.drawPortal = drawPortal;
window.drawPhaseTitle = drawPhaseTitle;