// Select the button and the div
const button = document.getElementById("myButton");
const button2 = document.getElementById("myButton2");
const div1 = document.getElementById("div1");

// Add a click event listener to the button
button.addEventListener("click", () => {
    // Update the text content of the div
    div1.textContent = "Selamlar";
});
button2.addEventListener("click", () => {

    div2.textContent = `Merhaba ${document.getElementById("myTextarea").value}`;
    console.log(document.getElementById("myTextarea").value);
});
