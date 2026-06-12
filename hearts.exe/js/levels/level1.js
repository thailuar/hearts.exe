function createLevel1(){

    return{

        title:"SECTOR 01",
        friendSaved:false,
        background:"assets/backgrounds/fase1.png",
        platforms:[

            //1ª plat principal
            {x:0,y:900,w:1800,h:100},

            //primeira parte de plataformas
            {x:900,y:800,w:120,h:20},
            {x:1110,y:710,w:140,h:20},
            {x:1350,y:640,w:160,h:20},

            //segunda parte de plataformas
            {x:1850,y:800,w:140,h:20},
            {x:2100,y:750,w:130,h:20},
            {x:2350,y:650,w:160,h:20},

            //2ª plat principal
            {x:2650,y:700,w:500,h:500},

            //1ª plat movel
            {x:3250,y:700,w:150,h:20,
                moveY:true,
                minY:700,
                maxY:900,
                speed:1.5,
                dir:1
            },

            //3ª plat principal
            {x:3500,y:700,w:900,h:500},

            //terceira parte de plataformas
            {x:3550,y:600,w:140,h:20},
            {x:3800,y:550,w:140,h:20},
            {x:4050,y:455,w:600,h:20},

            {x:4350,y:650,w:400,h:500},

            //quarta parte de plataformas
            {x:4800,y:590,w:180,h:20},
            {x:5100,y:520,w:180,h:20},

            //2ª plat movel
            {x:5380,y:450,w:180,h:20,
                moveY:true,
                minY:450,
                maxY:900,
                speed:1.5,
                dir:1
            },
            {x:5700,y:550,w:180,h:20,
                moveY:true,
                minY:450,
                maxY:800,
                speed:1.0,
                dir:1
            },

            //quinta parte de plataformas
            {x:5950,y:700,w:700,h:500},
            
            {x:7000,y:650,w:180,h:20,
                moveX:true,
                minX:6700,
                maxX:7200,
                speed:2.0,
                dir:1
            },

            {x:7500,y:680,w:2000,h:20},
            {x:7800,y:540,w:300,h:20}
            
        ],

        waterZones:[

            {x:-1000,w:1000},
            {x:1800,w:850},
            {x:3000,w:850},
            {x:4200,w:180},
            {x:4700,w:1500},
            {x:6000,w:5000}
        ],

        checkpoints:[

            {x:1500},
            {x:3300},
            {x:6100}
        ],

        enemies:[

            new Enemy(980,760,900,1020),

            new Enemy(2700,660,2650,3100),

            new Enemy(4000,660,3500,4300),

            new Enemy(
                7800,
                570,
                7600,
                8350,
                "boss"
            )
        ],

        friend: new Friend(
            3000,
            650,
            "Lucas",
            "Eu a vi sendo levada para o próximo setor."
        ),

        fragments:[

            new Fragment(600,800),

            new Fragment(1450,600),

            new Fragment(2150,700),

            new Fragment(3600,500),

            new Fragment(4100,370)
        ],

        portal:{

            x:8150,
            y:560,
            w:80,
            h:120
        },

        tv:{

            x:450,
            y:850,

            text:
            "...eu sabia que você viria..."
        }
    };
}

window.createLevel1 = createLevel1;