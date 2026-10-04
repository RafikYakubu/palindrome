const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");

checkButton.addEventListener("click", () => {
  const text = textInput.value;
  if (text === "") {
    alert("Please input a value");
    return;
}

const cleanedText = text
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");

const reversedText = cleanedText
    .split("")
    .reverse()
    .join("");

    if (cleanedText === reversedText) {
    result.textContent = `${text} is a palindrome`;
} else {
    result.textContent = `${text} is not a palindrome`;
}
});