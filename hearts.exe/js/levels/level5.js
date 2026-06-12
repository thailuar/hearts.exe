function createLevel5(){

    return {

        friendSaved:false,
        background:
        "assets/backgrounds/fase5.png",

        platforms: [],

        enemies: [],

        friend: null,

        girlfriend:{

            x:5300,
            y:580,

            w:40,
            h:70
        },

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