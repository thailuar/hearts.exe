console.log("input.js carregado");
const keys = {};

window.keys = keys;

addEventListener("keydown",e=>{

    keys[e.key.toLowerCase()] = true;

    if(e.key === "Escape"){

        console.log("ESC FUNCIONOU");

        console.log("gameStarted =", gameStarted);
        console.log("paused =", paused);

        if(!window.gameStarted)
        return;

        window.paused = !window.paused;

        console.log("novo paused =", paused);

        document.getElementById(
            "pauseMenu"
        ).style.display =
        window.paused ? "flex" : "none";
    }
});

addEventListener("keyup",e=>{

    keys[e.key.toLowerCase()] = false;

});