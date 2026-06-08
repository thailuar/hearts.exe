function createLevel5(){

    return {

        friendSaved:false,
        background:
        "assets/backgrounds/fase5.png",

        platforms: [],

        enemies: [],

        friend: new Friend(
            3200,
            450,
            "Lucas"
        ),

        fragments: [],

        checkpoints: [],

        waterZones: [],

        portal: {

            x: 0,
            y: 0,
            w: 0,
            h: 0
        }
    };
}

window.createLevel5 = createLevel5;