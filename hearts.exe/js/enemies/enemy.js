class Enemy{

    constructor(
        x,
        y,
        leftLimit,
        rightLimit,
        type="normal"
    ){

        this.x = x;
        this.y = y;

        this.type = type;

        this.w =
        type === "boss"
        ? 90
        : 32;

        this.h =
        type === "boss"
        ? 110
        : 40;

        this.speed = 1.2;

        this.direction = 1;

        this.maxHp =
        type === "boss"
        ? 350
        : 50;

        this.hp = this.maxHp;

        this.leftLimit = leftLimit;
        this.rightLimit = rightLimit;

        this.attackCooldown = 0;

        this.active =
        type !== "boss";
    }

    update(){

    // ativa boss quando player chega
    if(this.type === "boss" && !this.active){

        if(player.x > 7500){

            this.active = true;
        }
    }

    if(!this.active)
    return;

    // =========================
    // IA DO BOSS
    // =========================

    if(this.type === "boss"){

        // segue player
        if(player.x < this.x){

            this.direction = -1;
        }
        else{

            this.direction = 1;
        }

        this.x +=
        this.speed * 2 * this.direction;
    }

    // =========================
    // INIMIGO NORMAL
    // =========================

    else{

        this.x +=
        this.speed * this.direction;

        if(this.x <= this.leftLimit){

            this.direction = 1;
        }

        if(this.x + this.w >= this.rightLimit){

            this.direction = -1;
        }
    }

    // =========================
    // ATAQUE
    // =========================

    if(
        player.x < this.x + this.w &&
        player.x + player.w > this.x &&
        player.y < this.y + this.h &&
        player.y + player.h > this.y
    ){

        if(this.attackCooldown <= 0){

            player.damage(
                this.type === "boss"
                ? 20
                : 10
            );

            this.attackCooldown = 40;
        }
    }

    this.attackCooldown--;
}

    draw(){

        ctx.fillStyle =
        this.type === "boss"
        ? "#1c1c1c"
        : "#bb353b";

        ctx.fillRect(
            this.x,
            this.y,
            this.w,
            this.h
        );

        ctx.fillStyle = "#000";

        ctx.fillRect(
            this.x-2,
            this.y-16,
            this.w+4,
            10
        );

        ctx.fillStyle = "#ff0044";

        const hpPercent =
            Math.max(0,this.hp) / this.maxHp;

            ctx.fillRect(
                this.x,
                this.y-14,
                this.w * hpPercent,
                6
            );
    }
}

window.Enemy = Enemy;