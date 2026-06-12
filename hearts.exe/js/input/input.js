console.log("input.js carregado");
const keys = {};

window.keys = keys;

addEventListener("keydown",e=>{

    keys[e.key.toLowerCase()] = true;

    if(e.key === "Escape"){

    const menu =
    document.getElementById(
        "pauseMenu"
    );

    console.log(menu);

    menu.style.display = "flex";
}
});

addEventListener("keyup",e=>{

    keys[e.key.toLowerCase()] = false;

});