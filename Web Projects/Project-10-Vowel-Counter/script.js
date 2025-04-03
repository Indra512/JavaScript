function countVowels() {
    let inputText = document.getElementById("inputText").value;
    let count = 0;
    inputText = inputText.toLowerCase();
    for (let i = 0; i < inputText.length; i++) {
        const char = inputText.charAt(i);
        if (isVowel(char)) {
            count++;
        }
    }
    const result = document.getElementById("result");
    result.textContent = "Total Vowels: " + count;
}

function isVowel(char) {
    const vowels = ["a", "e", "i", "o", "u"];
    return vowels.includes(char);
}
