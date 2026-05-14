import Simulation from "./Simulation.js";

export default class Playground {
    constructor(ctx) {
        this.simulation = new Simulation(ctx);
        this.ctx = ctx;
    }

    update(dt) {
        this.simulation.update(dt);
    }

    draw() {
        const ctx = this.ctx;
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        this.simulation.draw();
    }

    onMouseMove(x, y) {
        console.log("mouse moved to " + x + ", " + y);
    }

    onMouseDown(button) {
        console.log("mouse button pressed: " + button);
    }

    onMouseUp(button) {
        console.log("mouse button released: " + button);
    }
}