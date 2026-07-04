let button = document.querySelector("#btn");

let darkMode = false;

button.addEventListener("click", function () {

    if (darkMode == false) {

        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";

        button.textContent = "☀️ Light Mode";

        darkMode = true;

    } else {

        document.body.style.backgroundColor = "black";
        document.body.style.color = "whitw";

        button.textContent = "🌙 Dark Mode";

        darkMode = false;
    }

});