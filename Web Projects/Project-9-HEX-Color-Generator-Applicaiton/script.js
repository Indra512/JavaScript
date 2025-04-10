const generateColorButton = document.getElementById("generateColor");
generateColorButton.addEventListener("click", updateColor);

function updateColor() {
    const colorBox = document.getElementById("colorBox");
    const colorText = document.getElementById("colorText");
    const randomColor = getRandomColor();
    colorBox.style.backgroundColor = randomColor;
    colorText.textContent = randomColor;
}

function getRandomColor() {
    // color = #f33333
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}