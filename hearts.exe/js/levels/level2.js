function createLevel2(){

    return{

        title:"SECTOR 02",
        friendSaved:false,
        background:"fase2.png",

        platforms:[

            // chão inicial
            {x:0,y:900,w:1200,h:100},

            // subida
            {x:1400,y:760,w:200,h:20},
            {x:1700,y:620,w:200,h:20},
            {x:2000,y:480,w:200,h:20},

            // plataforma gigante
            {x:2400,y:700,w:900,h:500},

            // plataformas móveis
            {
                x:3500,
                y:700,
                w:180,
                h:20,

                moveY:true,

                minY:450,
                maxY:850,

                speed:2,

                dir:1
            },

            {
                x:3900,
                y:500,
                w:180,
                h:20,

                moveX:true,

                minX:3900,
                maxX:4500,

                speed:2,

                dir:1
            },

            // área final
            {x:5000,y:700,w:1500,h:500}
        ],

        waterZones:[

            {x:-1000,w:1000},
            {x:1200,w:1000},
            {x:3300,w:1200}
        ],

        checkpoints:[

            {x:1500},
            {x:3000},
            {x:5200}
        ],

        enemies:[

            new Enemy(1500,720,1400,1600),

            new Enemy(2600,660,2400,3200),

            new Enemy(5200,660,5000,6200),

            new Enemy(
                6000,
                590,
                5600,
                6600,
                "boss"
            )
        ],

        friend: new Friend(
            3200,
            450,
            "Lucas"
        ),

        fragments:[

            new Fragment(1500,700),

            new Fragment(2100,420),

            new Fragment(3900,430),

            new Fragment(5400,620)
        ],

        portal:{

            x:6400,
            y:580,

            w:80,
            h:120
        },

        tv:{

            x:2600,
            y:650,

            text:
            "...o sistema está quebrando..."
        }
    };
}

window.createLevel2 = createLevel2;