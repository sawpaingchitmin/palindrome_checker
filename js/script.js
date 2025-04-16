// Get references to the input, button, and result elements from the DOM
const textInput = document.getElementById("text-input");
const checkPalindrome = document.getElementById("check-btn");
const result = document.getElementById("result");

// Add a click event listener to the check button
checkPalindrome.addEventListener("click", () => {
  // Get the value from the input, convert it to lowercase, and remove non-alphanumeric characters
  const input = textInput.value.toLowerCase().replace(/[^a-z0-9]/g, '');

  // If the input is empty, show an alert and stop the function
  if (input === "") {
  alert("Please input a value");
  return;
  }

  // Function to check if the processed text is a palindrome
  const isPalindrome = (text) => {
    return text === `${text.split('').reverse().join('')}`;
  }
  
  // Check if the input is a single character or a palindrome
  if (input.length === 1 || isPalindrome(input)) {
    result.textContent = `${textInput.value} is a palindrome`;
  } else {
    result.textContent = `${textInput.value} is not a palindrome`;
  }
 
  // Clear the input field after checking
  textInput.value = '';
});