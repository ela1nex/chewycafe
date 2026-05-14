import Playground from "./Playground.js";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let lastTime = performance.now();
let playground = new Playground(ctx);

function loop() {
    requestAnimationFrame(loop);

    const currentTime = performance.now();
    const dt = (currentTime - lastTime) / 1000;
    lastTime = currentTime;

    playground.update(dt);
    playground.draw();
}

loop();

function getMousePos(canvas, event) {
    const rect = canvas.getBoundingClientRect();
    return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    };
}

canvas.addEventListener("mousemove", (event) => {
    const mouse = getMousePos(canvas, event);
    playground.onMouseMove(mouse.x, mouse.y);
});

canvas.addEventListener("mousedown", (event) => {
    playground.onMouseDown(event.button);
});

canvas.addEventListener("mouseup", (event) => {
    playground.onMouseUp(event.button);
});