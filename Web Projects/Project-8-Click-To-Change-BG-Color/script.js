const body = document.body;

body.addEventListener("click", changeBackgroundColor);

function changeBackgroundColor() {
    const randomColor = getRandomColor();
    body.style.backgroundColor = randomColor;
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