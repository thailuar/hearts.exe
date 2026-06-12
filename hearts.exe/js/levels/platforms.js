function updatePlatforms(){

    currentLevel.platforms.forEach(p=>{

        if(p.moveX){

            p.x += p.speed * p.dir;

            if(p.x <= p.minX){

                p.dir = 1;
            }

            if(p.x >= p.maxX){

                p.dir = -1;
            }
        }

        if(p.moveY){

            p.y += p.speed * p.dir;

            if(p.y <= p.minY){

                p.dir = 1;
            }

            if(p.y >= p.maxY){

                p.dir = -1;
            }
        }
    });
}

window.updatePlatforms = updatePlatforms;