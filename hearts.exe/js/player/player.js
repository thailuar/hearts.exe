class Player{

    constructor(){

        this.x = 200;
        this.y = 500;

        this.w = 32;
        this.h = 48;

        this.vx = 0;
        this.vy = 0;

        this.speed = 4;

        this.jump = -14;

        this.grounded = false;

        this.direction = 1;

        this.maxHp = 100;
        this.hp = 100;

        this.damageMultiplier = 1;

        this.defense = 0;

        this.attackCooldown = 0;

        this.invincible = 0;

        this.walkFrame = 0;

        this.chainJumpUnlocked = false;

        this.canChainJump = false;
    }

    update(keys,
        currentLevel,
        checkpoint
    ){

        if(keys["a"] || keys["arrowleft"]){

            this.vx = -this.speed;

            this.direction = -1;

            this.walkFrame += 0.2;
        }

        else if(keys["d"] || keys["arrowright"]){

            this.vx = this.speed;

            this.direction = 1;

            this.walkFrame += 0.2;
        }

        else{

            this.vx *= 0.8;
        }

        const jumpKey =
        keys["w"] ||
        keys["arrowup"];

        if(jumpKey && !jumpPressed){

            if(this.grounded){

                this.vy = this.jump;

                this.grounded = false;

                this.canChainJump = true;
            }

            else if(
                this.chainJumpUnlocked &&
                this.canChainJump
            ){

                this.vy = this.jump;

                this.vx +=
                this.direction * 4;

                this.canChainJump = false;
            }
        }

        jumpPressed = jumpKey;

        if(
            keys[" "] &&
            this.attackCooldown <= 0
        ){

            shootProjectile();

            this.attackCooldown = 25;

            playBeep(500,0.05);
        }

        this.attackCooldown--;

        this.vy += window.GRAVITY;
        this.x += this.vx;
        this.y += this.vy;

        this.grounded = false;

        currentLevel.platforms.forEach(p=>{

            const prevBottom =
            this.y + this.h - this.vy;

            const currentBottom =
            this.y + this.h;

            const touchingPlatform =

                this.x + this.w > p.x &&
                this.x < p.x + p.w;

            const fallingOntoPlatform =

                prevBottom <= p.y + 10 &&
                currentBottom >= p.y;

            if(
                touchingPlatform &&
                fallingOntoPlatform
            ){

                this.y = p.y - this.h;

                if(p.moveX){

                    this.x += p.speed * p.dir;
                }

                if(p.moveY){

                    this.y += p.speed * p.dir;
                }

                this.vy = 0;

                this.grounded = true;
            }
        });

        currentLevel.waterZones.forEach(w=>{

            if(
                this.x + this.w > w.x &&
                this.x < w.x + w.w &&
                this.y > 915
            ){

                this.x = checkpoint.x;
                this.y = checkpoint.y;

                this.vx = 0;
                this.vy = 0;

                playBeep(100,0.2);
            }
        });

        if(this.invincible > 0){

            this.invincible--;
        }
    }

    draw(){

        ctx.save();

        if(this.invincible > 0){

            ctx.globalAlpha = 0.5;
        }

        ctx.translate(
            this.x + this.w/2,
            this.y + this.h/2
        );

        ctx.scale(this.direction,1);

        ctx.fillStyle = "#bb353b";

        ctx.fillRect(-16,-24,32,48);

        ctx.fillStyle = "#eec2a1";

        ctx.fillRect(-12,-38,24,16);

        ctx.fillStyle = "#506cb5";

        const legOffset =
        Math.sin(this.walkFrame) * 4;

        ctx.fillRect(-10,20,8,12+legOffset);
        ctx.fillRect(2,20,8,12-legOffset);

        ctx.fillStyle = "#ebcf59";

        ctx.fillRect(-16,0,32,5);

        ctx.restore();
    }

    damage(amount){

        if(this.invincible > 0)
        return;

        amount -= this.defense;

        if(amount < 1){

            amount = 1;
        }

        this.hp -= amount;

        // morreu
        if(this.hp <= 0){

        this.hp = 0;

        gameOver();

        return;
    }

        this.invincible = 60;

        playBeep(120,0.1);
    }
}


window.Player = Player;