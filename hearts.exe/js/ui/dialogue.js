function showDialogue(text){

    const d =
    document.getElementById(
        "dialogue"
    );

    d.style.display = "block";

    d.innerHTML = text;

    clearTimeout(d.hideTimer);

    d.hideTimer = setTimeout(()=>{

        d.style.display = "none";

    },4000);
}

window.showDialogue = showDialogue;