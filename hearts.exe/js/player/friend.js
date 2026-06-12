class Friend {

    constructor(x, y, name, dialog) {

        this.x = x;
        this.y = y;

        this.w = 30;
        this.h = 50;

        this.name = name;
        this.dialog = dialog;

        this.saved = false;
        this.showPrompt = false;
    }

    update(player) {

        if(this.saved) return;

        const touching =

            player.x < this.x + this.w &&
            player.x + player.w > this.x &&
            player.y < this.y + this.h &&
            player.y + player.h > this.y;

        this.showPrompt = touching;

        if(touching && keys["e"]) {

            this.saved = true;
            currentLevel.friendSaved = true;

            showFriendMessage(
                this.name,
                this.dialog
            );

            playBeep(800,0.1);
        }
    }

    draw() {

        if(this.saved) return;

        // personagem
        ctx.fillStyle = "#44aaff";

        ctx.fillRect(
            this.x,
            this.y,
            this.w,
            this.h
        );

        // balão de interação
        if(this.showPrompt) {

            ctx.fillStyle = "white";
            ctx.font = "18px Arial";

            ctx.fillText(
                "E - Conversar",
                this.x - 25,
                this.y - 15
            );
        }
    }
}

window.Friend = Friend;