//Moving Dot
/*
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
*/
//Spinning Square:
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const width = canvas.width;
const height = canvas.height;

let angle = 0;

function drawSquare() {
    ctx.clearRect(0, 0, width, height);
    ctx.save();
    ctx.translate(width / 2, height / 2);  
    ctx.rotate(angle * Math.PI / 180); 
    ctx.fillStyle = '#3498db'; 
    ctx.fillRect(-50, -50, 100, 100); 
    ctx.restore();
    angle += 1;
}
setInterval(drawSquare, 16);