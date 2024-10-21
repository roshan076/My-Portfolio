const input = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");

function cleanText(text){
    return text.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
}

function checkPalindrome() {
    const inputText = input.value;
    if (!inputText) {
        alert("Please input a value");
        return;
    }

    const cleanedText = cleanText(inputText);

    const isPalindrome = cleanedText === cleanedText.split("").reverse().join("");

    if (isPalindrome) {
        result.textContent = `"${inputText}" is a Palindrome`;
        result.style.color = "green";
    }
    else {
        result.textContent = `"${inputText}" is not a Palindrome`;
        result.style.color = "red";
    }
};

checkButton.addEventListener("click", checkPalindrome)