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
/*
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
    ctx.strokeRect(-50, -50, 100, 100); 
    ctx.restore();
    angle += 1;
}
setInterval(drawSquare, 16);
*/
//Combined using rotate and rect
/*
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const width = canvas.width;
const height = canvas.height;
let angle = 0;
const speed = 5;
let rad = 50;
let x = 0;
function drawSquare() {
    ctx.clearRect(0, 0, width, height);
    ctx.save();
    ctx.translate(x, height / 2);  
    ctx.rotate(angle * Math.PI / 180); 
    ctx.strokeRect(-50, -50, 100, 100); 
    ctx.restore();
    angle += 1;

    x += speed;
    if (x - rad > canvas.width) {
        x = -rad;
    }
}
setInterval(drawSquare, 16);
*/
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const width = canvas.width;
const height = canvas.height;
let angle = 0;
const speed = 5;
const sideLength = 100;
const halfSide = sideLength / 2;
let x = 0;

function drawSquare() {
    ctx.clearRect(0, 0, width, height);
    ctx.save();
    ctx.translate(x, height / 2);


    const angleRad = angle * Math.PI / 180;

    const corners = [
        { x: -halfSide, y: -halfSide },
        { x: halfSide, y: -halfSide },
        { x: halfSide, y: halfSide },
        { x: -halfSide, y: halfSide }
    ].map(corner => {
        return {
            x: corner.x * Math.cos(angleRad) - corner.y * Math.sin(angleRad),
            y: corner.x * Math.sin(angleRad) + corner.y * Math.cos(angleRad)
        };
    });

    ctx.beginPath();
    ctx.moveTo(corners[0].x, corners[0].y);
    for (let i = 1; i < corners.length; i++) {
        ctx.lineTo(corners[i].x, corners[i].y);
    }
    ctx.closePath();
    ctx.stroke();

    ctx.restore();
    angle += 1;

    x += speed;
    if (x - halfSide > canvas.width) {
        x = -halfSide;
    }
}

setInterval(drawSquare, 16);