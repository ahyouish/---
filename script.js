// MATRIX LOADER ANIMATION
const canvas = document.getElementById("matrixCanvas");
const ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const letters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%^&*()";
const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);

function drawMatrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#0F0";
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {
        const text = letters.charAt(Math.floor(Math.random() * letters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

let matrixInterval = setInterval(drawMatrix, 35);

// Hide matrix after a few seconds
setTimeout(() => {
    document.getElementById("matrix-loader").style.display = "none";
    document.getElementById("main-content").style.display = "block";
    clearInterval(matrixInterval);
}, 3000);

// SAVINGS PROGRESS FUNCTION
function calculateProgress() {
    const objective = parseFloat(document.getElementById("objective").value);
    const saved = parseFloat(document.getElementById("saved").value);
    const result = document.getElementById("result");

    if (isNaN(objective) || isNaN(saved) || objective <= 0) {
        result.textContent = "Please enter valid numbers.";
        return;
    }

    let percentage = (saved / objective) * 100;
    percentage = percentage.toFixed(2);

    if (percentage >= 100) {
        result.textContent = `🎉 Objective Achieved! You've saved ${saved} out of ${objective}.`;
    } else {
        result.textContent = `Progress: ${percentage}% — ₹${objective - saved} left to complete your objective.`;
    }
           }
