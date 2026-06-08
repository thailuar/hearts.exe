// =====================================================
// CANVAS
// =====================================================
const canvas =
document.getElementById("game");

const ctx =
canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

// =====================================================
// BACKGROUND
// =====================================================

const bgImage = new Image();

// =====================================================
// VARIABLES
// =====================================================

window.GRAVITY = 0.7;

let muted = false;

let gameStarted = false;

let paused = false;
window.gameStarted = gameStarted;
window.paused = paused;

let waitingUpgrade = false;

let friendMessage = "";
let friendName = "";
let friendMessageTimer = 0;

//titulos das fases
let phaseTitleOpacity = 0;
let phaseTitleTimer = 0;
let showingPhaseTitle = false;

let jumpPressed = false;

let totalFragments = 0;

let collectedFragments = 0;

const camera = {

    x:0,
    y:0
};

let checkpoint = {

    x:200,
    y:500
};

const projectiles = [];

// =====================================================
// INPUT
// =====================================================

function clearMovementKeys(){

    keys["a"] = false;
    keys["d"] = false;
    keys["w"] = false;
    keys[" "] = false;

    keys["arrowleft"] = false;
    keys["arrowright"] = false;
    keys["arrowup"] = false;

    keys["e"] = false;
}

// =====================================================
// PLAYER
// =====================================================

const levels = [
    createLevel1(),
    createLevel2(),
    createLevel3(),
    createLevel4(),
    createLevel5()
];

let currentLevelIndex = 0;
let currentLevel =
levels[currentLevelIndex];

bgImage.src = currentLevel.background;

const player = new Player();

// =====================================================
// DRAW
// =====================================================

function draw(){

    drawBackground();

    ctx.save();

    ctx.translate(
        -camera.x,
        -camera.y
    );

    drawWater();

    drawPlatforms();

    drawTV();

    drawPortal();

    currentLevel.fragments.forEach(
        f=>f.draw()
    );

    currentLevel.enemies.forEach(
        e=>e.draw()
    );

    projectiles.forEach(
        p=>p.draw()
    );

    if(currentLevel.friend){

        currentLevel.friend.draw(ctx);
    }

    player.draw();

    ctx.restore();

    drawHUD();
    drawPhaseTitle();     
    drawFriendMessage();

}

function drawFriendMessage(){

    if(friendMessageTimer <= 0)
    return;

    ctx.fillStyle =
    "rgba(0,0,0,0.8)";

    ctx.fillRect(
        100,
        canvas.height - 180,
        600,
        100
    );

    ctx.fillStyle = "white";

    ctx.font = "bold 22px Arial";

    ctx.fillText(
        friendName,
        120,
        canvas.height - 140
    );

    ctx.font = "18px Arial";

    ctx.fillText(
        friendMessage,
        120,
        canvas.height - 110
    );
}

// =====================================================
// UPDATE
// =====================================================

function update(){

    updatePlatforms(currentLevel.platforms);
    player.update(keys,
        currentLevel,
        checkpoint);

    if(currentLevel.friend){

        currentLevel.friend.update(player);
    }
    // =====================================================
    // CHECKPOINTS
    // =====================================================

    currentLevel.checkpoints.forEach(c=>{

        if(player.x > c.x){

            checkpoint.x = c.x;
            checkpoint.y = 500;
        }
    });

    currentLevel.enemies.forEach(
        e=>e.update()
    );

    // remove inimigos mortos
    currentLevel.enemies =
    currentLevel.enemies.filter(e=>{

        return e.hp > 0;
    });

    currentLevel.fragments.forEach(
        f=>f.update()
    );

    projectiles.forEach(
        p=>p.update()
    );

    // remove projéteis mortos
    for(let i=projectiles.length-1;i>=0;i--){

        if(projectiles[i].dead){

            projectiles.splice(i,1);
        }
    }

    // =========================
    // PORTAL
    // =========================

    const bossAlive =
        currentLevel.enemies.some(
            e => e.type === "boss"
        );

    const friendSaved =
        currentLevel.friend?.saved;

    if(!bossAlive && friendSaved){

        const p = currentLevel.portal;

        if(
            player.x < p.x + p.w &&
            player.x + player.w > p.x &&
            player.y < p.y + p.h &&
            player.y + player.h > p.y
        ){

            paused = true;

            // mostra tela de skill
            document.getElementById(
                "skillUnlock"
            ).style.display = "flex";

            document.getElementById(
                "skillText"
            ).innerText =
            "CHAIN JUMP UNLOCKED";

            // desbloqueia habilidade
            player.chainJumpUnlocked = true;
        }
    }
    camera.x =
    player.x - canvas.width/2 + 100;

    if(friendMessageTimer > 0){

        friendMessageTimer--;
    }
}

function showFriendMessage(
    name,
    message
){

    friendName = name;

    friendMessage = message;

    friendMessageTimer = 300;
}

// =====================================================
// LOOP
// =====================================================

function gameLoop(){

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    if(
        window.gameStarted &&
        !window.paused
    )

        draw();
    }

    requestAnimationFrame(
        gameLoop
    );
}

gameLoop();

addEventListener(
"resize",()=>{

    canvas.width =
    innerWidth;

    canvas.height =
    innerHeight;
});

document.addEventListener(
"keydown",
(e)=>{

    if(e.key === "Escape"){

        if(!gameStarted)
        return;

        paused = !paused;

        document.getElementById(
            "pauseMenu"
        ).style.display =
        paused ? "flex" : "none";
    }
});
