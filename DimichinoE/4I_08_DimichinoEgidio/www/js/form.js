document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault(); 

    const inputs = document.querySelectorAll("input[type='text'], input[type='password']");

    inputs.forEach((input) => {
        if (input.value.trim() === "") {
            input.style.border = "2px solid red";
        } else {
            input.style.border = "1px solid black";
        }
    });
});