export default class Simulation {
    constructor(ctx) {
        this.ctx = ctx;
    }

    update(dt) {}

    draw() {
        const ctx = this.ctx;

        ctx.beginPath();
        ctx.rect(20, 40, 50, 50);
        ctx.fillStyle = "#516543";
        ctx.fill();
        ctx.closePath();
    }
}