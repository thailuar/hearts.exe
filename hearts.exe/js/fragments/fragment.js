class Fragment{

    constructor(x,y){

        this.x = x;
        this.y = y;

        this.w = 20;
        this.h = 20;

        this.collected = false;
    }

    update(){

        if(this.collected)
        return;

        if(
            player.x < this.x + this.w &&
            player.x + player.w > this.x &&
            player.y < this.y + this.h &&
            player.y + player.h > this.y
        ){

            this.collected = true;

            collectedFragments++;

            playBeep(900,0.08);
        }
    }

    draw(){

        if(this.collected)
        return;

        ctx.fillStyle = "#ebcf59";

        ctx.fillRect(
            this.x,
            this.y,
            this.w,
            this.h
        );
    }
}

window.Fragment = Fragment;