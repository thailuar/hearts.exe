function createLevel4(){

    return {

        friendSaved:false,
        background:
        "assets/backgrounds/fase4.png",

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

window.createLevel4 = createLevel4;