const passwordBox = document.getElementById("passwordBox");
const copyIcon = document.getElementById("copyIcon");
const inputSlider = document.getElementById("inputSlider");
const sliderValue = document.getElementById("sliderValue");
const lowercaseEl = document.getElementById("lowercase");
const uppercaseEl = document.getElementById("uppercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generatePasswordButton = document.getElementById("generatePassword");

const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+-=[]{}\\|;':\",./<>?";


generatePasswordButton.addEventListener("click", () => {
    passwordBox.value = generatePassword();
});

sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener("input", () => {
    sliderValue.textContent = inputSlider.value;
});

function generatePassword() {
    let characters = "";
    let password = "";
    const length = inputSlider.value;

    characters += lowercaseEl.checked ? lowercaseLetters : "";
    characters += uppercaseEl.checked ? uppercaseLetters : "";
    characters += numbersEl.checked ? numbers : "";
    characters += symbolsEl.checked ? symbols : "";

    for (let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
        // console.log(password);
    }
    return password;
}

copyIcon.addEventListener("click", () => {
    if (passwordBox.value !== "" || passwordBox.value.length >= 10) {
        navigator.clipboard.writeText(passwordBox.value);
        copyIcon.textContent = "check";

        setTimeout(() => {
            copyIcon.textContent = "content_copy";
        }, 2000);
    }
});