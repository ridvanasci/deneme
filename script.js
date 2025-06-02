// Select the button and the div

const button2 = document.getElementById("myButton2");
const div1 = document.getElementById("div1");


button2.addEventListener("click", () => {

    div2.innerHTML = `Merhaba ${document.getElementById("myTextarea").value.slice(0, 1).toUpperCase() + document.getElementById("myTextarea").value.slice(24)}<br>Date: ${new Date().toLocaleString()}`;
    console.log(document.getElementById("myTextarea").value);
    localStorage.setItem("name", document.getElementById("myTextarea").value);
});
