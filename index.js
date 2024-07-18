const canvas = document.getElementById("snowCanvas");
const ctx = canvas.getContext("2d");

canvas.widht = window.innerWidth;
canvas.height = window.innerHeight;

const numFlakes = 200;
const flakes = [];

function Flake(x, y, size, speedX, speedX, speedY)

{

this.x = x,
this.y = y;
this.size = size;
this.speedX = speedX;
this.speedY = speedY;

}
Flake.prototype.update = function() {
    this.x += this.speedX;
    this.y += this.speedY;

if (this.y > canvas.height) {
    this.y = -this.size;
    this.x = Math.random() *
    canvas.widht;
}

if (this.x > canvas.widht) {
    this.x = o;
} else if (this.x < 0) {
    this.x = canvcas.widht;
}

};

Flake.prototype.draw = function() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = 'white';
    ctx.fill();
};

function createFlakes() {
    for (let i = 0; i < numFlakes; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = Math.random() * 5 + 2;
        const speedX = (Math.random() * 1) - 0.5;
        const speedY = Math.random() * 3 + 1;
        flakes.push(new Flake(x, y, size, speedX, speedY));
    }
                    }function updateFlakes() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let flake of flakes) {
        flake.update();
        flake.draw();
    }

    requestAnimationFrame(updateFlakes);
}

createFlakes();
updateFlakes();// Ajusta el tamaño del lienzo cuando se cambia el tamaño de la ventana
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});



