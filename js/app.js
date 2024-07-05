let headers = document.querySelector('.banner');
let canvas = document.getElementById('dotsCanvas');
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;
let ctx = canvas.getContext('2d');

let dots = [];
let arrayColors = ['red', 'green', 'blue', 'navy', 'orange'];
for (let index = 0; index < 100; index++) {
    dots.push({
        x: Math.floor(Math.random() * canvas.width),
        y: Math.floor(Math.random() * canvas.height),
        size: Math.random() * 2 + 3,
        color: arrayColors[Math.floor(Math.random() * 15)]
    });
}
const drawDots = () => {
    dots.forEach(dot => {
        ctx.fillStyle = dot.color;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
        ctx.fill();
    });
}
drawDots();
// headers.addEventListener('mousemove', (event) => {
//     let mouse = {
//         x: event.pageX - headers.getBoundingClientRect().left,
//         y: event.pageY - headers.getBoundingClientRect().top
//     }
//     dots.forEach(dot => {
//         let distance = Math.sqrt((mouse.x - dot.x) ** 2 + (mouse.y - dot.y) ** 2);
//         if (distance < 300) {
//             ctx.strokeStyle = dot.color;
//             ctx.lineWidth = 1;
//             ctx.beginPath();
//             ctx.moveTo(dot.x, dot.y);
//             ctx.lineTo(mouse.x, mouse.y);
//             ctx.stroke();
//         }
//     });
// })