const password = document.querySelector("#password");
const submiteButton = document.querySelector("button");
const message = document.querySelector("#message");
const strength = document.querySelector("#strength")

password.addEventListener("input", () => {
    let passwordValue = password.value;
    let passwordLength = passwordValue.length;

    let strengthValue = '';
    if (passwordLength === 0) {
        strengthValue = '';
    } else if (passwordLength < 6) {
        strengthValue = 'Week';
    } else if (passwordLength < 10) {
        strengthValue = 'Medium';
    } else {
        strengthValue = 'Strong';
    }
    strength.textContent = strengthValue;
    message.style.display = "block" // Display the message
});

submiteButton.addEventListener("click", () => {
    const attribute = password.getAttribute('type');
    if (attribute === 'password') {
        password.setAttribute('type', 'text');
    } else {
        password.setAttribute('type', 'password');
    }
});