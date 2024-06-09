const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
let x = 0;
const y = 200; 
const dotRadius = 5;
const speed = 5;

function drawDot() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    context.arc(x, y, dotRadius, 0, Math.PI * 2);
    context.fillStyle = 'red';
    context.fill();
    context.closePath();

    x += speed;
    if (x - dotRadius > canvas.width) {
        x = -dotRadius;
    }
}

setInterval(drawDot, 16);