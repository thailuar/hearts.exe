function toggleVolume(){

    muted = !muted;

    document.getElementById(
        "volumeBtn"
    ).innerText =

    muted
    ? "Volume: OFF"
    : "Volume: ON";
}

function playBeep(freq,duration){

    if(muted)
    return;

    const audio =
    new (
        window.AudioContext ||
        window.webkitAudioContext
    )();

    const osc =
    audio.createOscillator();

    const gain =
    audio.createGain();

    osc.connect(gain);

    gain.connect(audio.destination);

    osc.frequency.value = freq;

    osc.type = "square";

    osc.start();

    gain.gain.exponentialRampToValueAtTime(
        0.0001,
        audio.currentTime + duration
    );

    osc.stop(
        audio.currentTime + duration
    );
}
