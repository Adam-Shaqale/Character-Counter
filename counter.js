const textInput = document.getElementById("text-input");
const countBtn = document.getElementById("count-btn");
const result = document.getElementById("result");

const sampleText = `A character counter is a helpful tool in web applications, especially for fields where there is a limit on the number of characters, like in social media posts, messaging, or comment sections. Its main purpose is to inform users in real-time how many characters they have typed and how many remain, helping them stay within the set limit without guesswork. This immediate feedback improves the user experience by reducing errors, preventing frustration, and helping users comply with character constraints without exceeding them.

    The way a character counter works in JavaScript is straightforward: it involves attaching a listener to the input field that detects each keystroke or modification. Every time the user types, deletes, or pastes text, an event (like input or keyup) is triggered, updating the displayed count based on the length of the input’s value. In JavaScript, this is typically done by selecting the input field, adding an event listener to it, and dynamically updating a display element to reflect the character count. For instance, if a text input field has a 100-character limit, the JavaScript code calculates the number of characters currently entered by getting the length of the input value. This count is then displayed next to the input field in the format "Characters: 50/100," which tells the user both their current count and the total allowed characters.

    The HTML setup for a character counter usually includes a text input field with an adjacent element to show the counter. This structure consists of an input element with a maxlength attribute to enforce a hard character limit at the HTML level, and a separate element, such as a <span> or <p>, to display the current character count. When the user reaches the character limit, the counter stops increasing, and any extra characters are prevented from being entered. The JavaScript code for this involves selecting the input element and the display element, then attaching an input event listener to the input field. Each time the user types, JavaScript calculates the character count by getting the length of the text inside the input field and updates the display with this count.

    Character counters can be enhanced with additional features. For example, styling can be applied to change the counter’s appearance when users are close to reaching the limit, such as changing the text color to red as a visual warning. This type of styling provides clear feedback to users, making it easy to see when they’re approaching the limit. Another possible enhancement is to display a message indicating that the character limit has been reached, helping users avoid frustration when they try to type more text than is allowed. Accessibility features can also be added to make the counter more usable for people with visual impairments by ensuring that screen readers can announce character count updates. While character counters typically track every letter, space, and punctuation mark, sometimes it may be more useful to provide a word counter instead, especially in fields like comments or essays where word count is the primary limitation. In such cases, JavaScript can split the input text by spaces and count the resulting words.

    Character counters benefit both users and developers by making form limits clear and easy to follow. They prevent common frustrations associated with character overflow, improve usability, and give forms a polished, professional look by adding an extra layer of feedback and guidance for users.
`;

textInput.value = sampleText;

function count() {
  const inputValue = textInput.value;
  if (inputValue === "") return;

  result.textContent = inputValue.length.toLocaleString("en-US");
}

countBtn.addEventListener("click", count);

textInput.addEventListener("input", () => {
  if (textInput.value === "") result.textContent = "";
});

document.getElementById("clear-btn").addEventListener("click", () => {
  textInput.value = "";
  result.textContent = "";
});
