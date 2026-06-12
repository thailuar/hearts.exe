class Projectile{

    constructor(x,y,d){

        this.x = x;
        this.y = y;

        this.w = 16;
        this.h = 8;

        this.speed = 10 * d;

        this.dead = false;

        this.damage =
        25 * player.damageMultiplier;

        this.startX = x;

        this.maxDistance = 550;
    }

    update(){

        this.x += this.speed;

        if(
            Math.abs(this.x - this.startX)
            > this.maxDistance
        ){
            this.dead = true;
        }

        currentLevel.enemies.forEach(e=>{

            if(
                this.x < e.x + e.w &&
                this.x + this.w > e.x &&
                this.y < e.y + e.h &&
                this.y + this.h > e.y
            ){

                e.hp -= this.damage;

                this.dead = true;
            }
        });
    }

    draw(){

        ctx.fillStyle = "#ebcf59";

        ctx.fillRect(
            this.x,
            this.y,
            this.w,
            this.h
        );
    }
}

function shootProjectile(){

    projectiles.push(

        new Projectile(
            player.x + player.w/2,
            player.y + player.h/2,
            player.direction
        )
    );
}

window.Projectile = Projectile;
window.shootProjectile = shootProjectile;